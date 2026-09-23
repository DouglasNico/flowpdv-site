const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const code = fs.readFileSync(require('node:path').join(__dirname, '../viewer-mode.js'), 'utf8');
const flush = async () => { for (let i = 0; i < 4; i++) await new Promise(setImmediate); };
class Element extends EventTarget {
  constructor() { super(); this.hidden = false; this.disabled = false; this.textContent = ''; this.attributes = {}; }
  setAttribute(k,v) { this.attributes[k] = v; }
  click() { this.dispatchEvent(new Event('click')); }
}
function setup({supported = true, reject = false, deferFull = false, deferLock = false} = {}) {
  const doc = new EventTarget();
  const elements = Object.fromEntries(['screen-dialog','viewer-frame','viewer-fullscreen','viewer-landscape','viewer-status'].map(k=>['#'+k,new Element()]));
  const dialog = elements['#screen-dialog'], frame = elements['#viewer-frame'], opener = new Element();
  const media = new EventTarget(); media.matches = true;
  let fullResolve, lockResolve, locks = 0, unlocks = 0, exits = 0;
  doc.fullscreenEnabled = supported; doc.fullscreenElement = null;
  doc.querySelector = selector => elements[selector]; doc.querySelectorAll = () => [opener];
  frame.requestFullscreen = async () => {
    if(reject) throw Error('Denied by browser');
    if(deferFull) await new Promise(r=>fullResolve=r);
    doc.fullscreenElement = frame; doc.dispatchEvent(new Event('fullscreenchange'));
  };
  doc.exitFullscreen = async () => { exits++; doc.fullscreenElement = null; doc.dispatchEvent(new Event('fullscreenchange')); };
  const orientation = { lock: async () => { locks++; if(deferLock) await new Promise(r=>lockResolve=r); }, unlock: () => { unlocks++; } };
  vm.runInNewContext(code, {document:doc, screen:{orientation}, matchMedia:()=>media});
  return {doc,dialog,frame,elements,open:()=>{dialog.open=true;opener.click()},close:()=>{dialog.open=false;dialog.dispatchEvent(new Event('close'))},stats:()=>({locks,unlocks,exits}),resolveFull:()=>fullResolve(),resolveLock:()=>lockResolve()};
}
test('unsupported fullscreen leaves the viewport dialog available', async()=>{
  const s=setup({supported:false}); s.open(); await flush();
  assert.equal(s.dialog.open,true); assert.equal(s.doc.fullscreenElement,null);
  assert.equal(s.elements['#viewer-fullscreen'].hidden,true);
  assert.equal(s.elements['#viewer-landscape'].hidden,true);
});
test('entering fullscreen does not force rotation; explicit Horizontal releases on close',async()=>{
  const s=setup();s.open();await flush();
  assert.equal(s.doc.fullscreenElement,s.frame);assert.equal(s.stats().locks,0);
  s.elements['#viewer-landscape'].click();await flush();assert.equal(s.stats().locks,1);
  s.close();await flush();assert.equal(s.stats().unlocks,1);assert.equal(s.doc.fullscreenElement,null);
});
test('a denied fullscreen request leaves controls usable and explains fallback',async()=>{
  const s=setup({reject:true});s.open();await flush();
  assert.equal(s.dialog.open,true);assert.equal(s.elements['#viewer-fullscreen'].disabled,false);
  assert.match(s.elements['#viewer-status'].textContent,/gire o celular/);assert.equal(s.stats().locks,0);
});
test('closing while fullscreen request is pending cannot leave the page fullscreen',async()=>{
  const s=setup({deferFull:true});s.open();s.close();s.resolveFull();await flush();
  assert.equal(s.doc.fullscreenElement,null);assert.equal(s.stats().exits,1);
});
test('late orientation success after close is released',async()=>{
  const s=setup({deferLock:true});s.open();await flush();s.elements['#viewer-landscape'].click();await flush();
  s.close();s.resolveLock();await flush();assert.equal(s.stats().unlocks,1);assert.equal(s.doc.fullscreenElement,null);
});
