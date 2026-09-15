(() => {
  'use strict';
  const screens = {
    pdv: { title:'Frente de caixa', file:'assets/screenshot-pdv.png', description:'Produtos, carrinho e pagamentos reunidos para facilitar o atendimento.' },
    estoque: { title:'Estoque', file:'assets/screenshot-estoque.png', description:'Acompanhe o cadastro, os saldos e os produtos que precisam de atenção.' },
    'curva-abc': { title:'Curva ABC', file:'assets/screenshot-curva-abc.png', description:'Identifique os produtos de maior participação nas vendas da loja.' },
    financeiro: {title:'Financeiro',file:'assets/screenshot-financeiro.png',description:'Contas, vencimentos e despesas organizados para acompanhar os compromissos da loja.'},
    comandas: {title:'Mesas e comandas',file:'assets/screenshot-comandas.png',description:'Visualize os atendimentos, o consumo e as mesas disponíveis.'},
    login: {title:'Acesso por operador',file:'assets/screenshot-login.png',description:'Acesso por perfil para organizar as responsabilidades da equipe.'},
    auditoria: { title:'Auditoria', file:'assets/screenshot-auditoria.png', description:'Consulte o histórico das operações para conferir a rotina do caixa.' }
  };
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  function closeMenu() { menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Abrir menu'); navigation.classList.remove('is-open'); }
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open ? 'Fechar menu' : 'Abrir menu'); navigation.classList.toggle('is-open',open); });
  navigation.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event => { if(event.key === 'Escape') closeMenu(); });
  document.addEventListener('click',event => { if(!event.target.closest('.header')) closeMenu(); });
  matchMedia('(min-width:1101px)').addEventListener('change',event => { if(event.matches) closeMenu(); });
  document.querySelectorAll('[data-contact]').forEach(link => { link.href = 'https://wa.me/5519989632127?text=' + encodeURIComponent(link.dataset.contact); link.target = '_blank'; link.rel = 'noopener noreferrer'; });
  document.querySelector('#year').textContent = new Date().getFullYear();
  const tabs = [...document.querySelectorAll('[role=tab]')];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.header');
  function headerOffset() {
    return Math.ceil(header ? header.getBoundingClientRect().height : 90);
  }
  function syncScrollPadding() {
    document.documentElement.style.setProperty('--nav-h', headerOffset() + 'px');
  }
  function scrollToSection(id) {
    if (!id || id === 'inicio' || id === 'conteudo') {
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const pad = parseFloat(getComputedStyle(el).paddingTop) || 0;
    const air = 16;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset() + Math.max(0, pad - air);
    window.scrollTo({ top: Math.max(0, y), behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  }
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented) return;
    const href = link.getAttribute('href');
    if (!href || href.length < 2) return;
    const id = decodeURIComponent(href.slice(1));
    if (!document.getElementById(id) && id !== 'inicio' && id !== 'conteudo') return;
    event.preventDefault();
    closeMenu();
    scrollToSection(id);
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  });
  window.addEventListener('resize', syncScrollPadding);
  syncScrollPadding();
  if (location.hash) {
    const startId = decodeURIComponent(location.hash.slice(1));
    requestAnimationFrame(() => {
      scrollToSection(startId);
      history.replaceState(null, '', location.pathname + location.search);
    });
  }
  let currentScreen = 0;
  function selectScreen(key,focus=false) {
    const screen = screens[key]; if(!screen) return;
    tabs.forEach(tab => { const selected = tab.dataset.screen === key; tab.setAttribute('aria-selected',String(selected)); tab.tabIndex = selected ? 0 : -1; if(selected && focus) tab.focus(); });
    const previous = currentScreen;
    currentScreen = tabs.findIndex(tab => tab.dataset.screen === key);
    document.querySelector('#screen-position').textContent = String(currentScreen+1).padStart(2,'0')+' / '+String(tabs.length).padStart(2,'0');
    const img = document.querySelector('#gallery-image'); img.src=screen.file; img.alt=screen.title+' do FlowPDV';
    document.querySelector('#peek-prev-image').src = screens[tabs[(currentScreen-1+tabs.length)%tabs.length].dataset.screen].file;
    document.querySelector('#peek-next-image').src = screens[tabs[(currentScreen+1)%tabs.length].dataset.screen].file;
    if (!reduceMotion.matches && currentScreen !== previous) {
      img.getAnimations().forEach(animation => animation.cancel());
      img.animate([{opacity:.15,transform:'translateX('+(currentScreen>=previous?60:-60)+'px) scale(.96)'},{opacity:1,transform:'translateX(0) scale(1)'}],{duration:480,easing:'cubic-bezier(.22,.8,.22,1)'});
    }
    document.querySelector('.screen-caption').textContent=screen.title;
    document.querySelector('#screen-description').textContent=screen.description;
    document.querySelector('#screen-panel').setAttribute('aria-labelledby','tab-'+key);
    document.querySelector('.gallery-image').dataset.screen=key;
  }
  tabs.forEach((tab,index) => { tab.addEventListener('click',()=>selectScreen(tab.dataset.screen)); tab.addEventListener('keydown',event=> { let next=index; if(event.key==='ArrowRight') next=(index+1)%tabs.length; else if(event.key==='ArrowLeft') next=(index+tabs.length-1)%tabs.length; else if(event.key==='Home') next=0; else if(event.key==='End') next=tabs.length-1; else return; event.preventDefault(); selectScreen(tabs[next].dataset.screen,true); }); });
  document.querySelector('#screen-prev').addEventListener('click',()=>selectScreen(tabs[(currentScreen-1+tabs.length)%tabs.length].dataset.screen));
  document.querySelector('#screen-next').addEventListener('click',()=>selectScreen(tabs[(currentScreen+1)%tabs.length].dataset.screen));
  document.querySelectorAll('[data-tab-link]').forEach(link => link.addEventListener('click',()=>selectScreen(link.dataset.tabLink)));
  document.querySelectorAll('[data-step]').forEach(button=>button.addEventListener('click',()=>selectScreen(tabs[(currentScreen+Number(button.dataset.step)+tabs.length)%tabs.length].dataset.screen)));
  const galleryButton = document.querySelector('.gallery-image');
  let pointerStart = null; let suppressClickUntil = 0;
  galleryButton.addEventListener('pointerdown',event=>{if(event.isPrimary && event.button===0) pointerStart={x:event.clientX,y:event.clientY,id:event.pointerId};});
  galleryButton.addEventListener('pointercancel',()=>{pointerStart=null;});
  galleryButton.addEventListener('pointerup',event=>{
    if(!pointerStart || pointerStart.id!==event.pointerId)return;
    const dx=event.clientX-pointerStart.x,dy=event.clientY-pointerStart.y; pointerStart=null;
    if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)*1.3){
      suppressClickUntil=Date.now()+600;
      selectScreen(tabs[(currentScreen+(dx<0?1:-1)+tabs.length)%tabs.length].dataset.screen);
    }
  });
  galleryButton.addEventListener('click',event=>{if(Date.now()<suppressClickUntil){event.preventDefault();event.stopImmediatePropagation();}},true);
  galleryButton.addEventListener('dragstart',event=>event.preventDefault());
  selectScreen('login');
  const dialog = document.querySelector('#screen-dialog'); let opener; let savedScroll = 0;
  function lockPage() {
    savedScroll = window.scrollY;
    document.documentElement.classList.add('image-open');
    document.body.style.top = '-'+savedScroll+'px';
    document.body.classList.add('image-open');
  }
  function unlockPage() {
    document.body.classList.remove('image-open'); document.body.style.top = '';
    document.documentElement.classList.remove('image-open');
    window.scrollTo({top:savedScroll,behavior:'instant'});
    opener?.focus({preventScroll:true});
  }
  document.querySelectorAll('.screenshot-open').forEach(button => button.addEventListener('click',()=> { const screen=screens[button.dataset.screen]; if(!screen)return; opener=button; document.querySelector('#dialog-image').src=screen.file; document.querySelector('#dialog-image').alt=screen.title+' do FlowPDV, ampliada'; document.querySelector('#dialog-title').textContent=screen.title; lockPage(); dialog.showModal(); }));
  document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog) {const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',unlockPage);
  const faqList = document.querySelector('.faq-items');
  const faqItems = [...document.querySelectorAll('.faq details')];
  faqItems.forEach((item) => {
    item.querySelector('summary').addEventListener('click', (event) => {
      event.preventDefault();
      if (item.open) {
        item.open = false;
        return;
      }
      const previous = faqItems.find((other) => other.open);
      if (previous) faqList.style.minHeight = faqList.offsetHeight + 'px';
      faqItems.forEach((other) => { other.open = false; });
      item.open = true;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { faqList.style.minHeight = ''; });
      });
    });
  });
  const backTop = document.querySelector('#back-top');
  function syncBackTop() {
    if (backTop) backTop.classList.toggle('is-visible', window.scrollY > 420);
  }
  window.addEventListener('scroll', syncBackTop, { passive: true });
  syncBackTop();
  (function startHeroFade() {
    const button = document.querySelector('.hero-screen');
    const label = document.querySelector('#hero-label');
    const frames = [...document.querySelectorAll('.hero-slide')];
    if (!button || frames.length < 2 || reduceMotion.matches) return;
    const keys = ['pdv', 'estoque', 'financeiro', 'comandas', 'curva-abc', 'auditoria', 'login'];
    keys.forEach((key) => { const preload = new Image(); preload.src = screens[key].file; });
    let index = 0;
    let showing = 0;
    let timer = 0;
    let hover = false;
    let offscreen = false;
    function paused() {
      return hover || offscreen || document.hidden;
    }
    function applyMeta(key, nextIndex) {
      const screen = screens[key];
      button.dataset.screen = key;
      button.setAttribute('aria-label', 'Ampliar a tela de ' + screen.title.toLowerCase());
      if (label) label.textContent = String(nextIndex + 1).padStart(2, '0') + ' / ' + screen.title.toUpperCase();
    }
    function show(nextIndex) {
      const key = keys[nextIndex];
      const screen = screens[key];
      const incoming = frames[1 - showing];
      const reveal = () => {
        frames[showing].classList.remove('is-active');
        frames[showing].setAttribute('aria-hidden', 'true');
        incoming.classList.add('is-active');
        incoming.removeAttribute('aria-hidden');
        incoming.alt = screen.title + ' do FlowPDV';
        showing = 1 - showing;
        index = nextIndex;
        applyMeta(key, nextIndex);
      };
      if (incoming.getAttribute('src') === screen.file && incoming.complete) {
        reveal();
        return;
      }
      incoming.onload = () => { incoming.onload = null; reveal(); };
      incoming.src = screen.file;
    }
    function arm() {
      clearTimeout(timer);
      if (paused()) return;
      timer = setTimeout(() => {
        show((index + 1) % keys.length);
        arm();
      }, 6800);
    }
    const product = button.closest('.hero-product');
    product.addEventListener('mouseenter', () => { hover = true; clearTimeout(timer); });
    product.addEventListener('mouseleave', () => { hover = false; arm(); });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearTimeout(timer);
      else arm();
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        offscreen = !entries[0].isIntersecting;
        if (offscreen) clearTimeout(timer);
        else arm();
      }, { threshold: 0.35 }).observe(product);
    }
    arm();
  })();
})();
