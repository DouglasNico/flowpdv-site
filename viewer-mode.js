(() => {
  'use strict';
  const dialog = document.querySelector('#screen-dialog');
  const frame = document.querySelector('#viewer-frame');
  const fullscreenButton = document.querySelector('#viewer-fullscreen');
  const landscapeButton = document.querySelector('#viewer-landscape');
  const status = document.querySelector('#viewer-status');
  const mobile = matchMedia('(max-width:700px), (pointer:coarse) and (max-width:1100px), (max-height:500px) and (max-width:1100px)');
  const canFullscreen = !!(document.fullscreenEnabled && frame.requestFullscreen);
  const canOrient = typeof screen.orientation?.lock === 'function';
  let generation = 0;
  let pending = false;
  let orientationOwned = false;
  function message(text = '') { status.textContent = text; status.hidden = !text; }
  function releaseOrientation() {
    if (!orientationOwned) return;
    orientationOwned = false;
    try { screen.orientation.unlock(); } catch { /* Browser may already have released it. */ }
  }
  function syncControls() {
    const full = document.fullscreenElement === frame;
    fullscreenButton.hidden = !canFullscreen;
    fullscreenButton.textContent = full ? 'Sair da tela cheia' : 'Tela cheia';
    fullscreenButton.setAttribute('aria-pressed', String(full));
    fullscreenButton.disabled = pending;
    landscapeButton.hidden = !(canFullscreen && canOrient && mobile.matches);
    landscapeButton.disabled = pending;
  }
  async function enterFullscreen() {
    if (!canFullscreen || !dialog.open || pending) return false;
    if (document.fullscreenElement === frame) return true;
    if (document.fullscreenElement) return false;
    const requestGeneration = generation;
    pending = true; syncControls();
    try {
      await frame.requestFullscreen({navigationUI: 'hide'});
      if (!dialog.open || generation !== requestGeneration) {
        if (document.fullscreenElement === frame) await document.exitFullscreen();
        return false;
      }
      message();
      return document.fullscreenElement === frame;
    } catch {
      if (dialog.open && generation === requestGeneration) message('A imagem já ocupa a área disponível. Para ver maior, gire o celular.');
      return false;
    } finally { pending = false; syncControls(); }
  }
  document.querySelectorAll('.screenshot-open').forEach(button => button.addEventListener('click', () => {
    generation++; message(); syncControls();
    // Runs in the original tap after site.js opens the dialog; keeps user activation.
    if (dialog.open && mobile.matches) void enterFullscreen();
  }));
  fullscreenButton.addEventListener('click', async () => {
    if (document.fullscreenElement === frame) {
      try { await document.exitFullscreen(); } catch { message('Use o comando do navegador para sair da tela cheia.'); }
    } else await enterFullscreen();
  });
  landscapeButton.addEventListener('click', async () => {
    const requestGeneration = generation;
    if (!await enterFullscreen() || !dialog.open || requestGeneration !== generation) return;
    try {
      await screen.orientation.lock('landscape');
      orientationOwned = true;
      if (!dialog.open || requestGeneration !== generation || document.fullscreenElement !== frame) releaseOrientation();
      else message();
    } catch {
      if (dialog.open && requestGeneration === generation) message('Gire o celular para a horizontal. Se necessário, ative a rotação automática do aparelho.');
    }
  });
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement !== frame) releaseOrientation();
    syncControls();
  });
  dialog.addEventListener('close', () => {
    generation++; releaseOrientation(); message();
    if (document.fullscreenElement === frame) document.exitFullscreen().catch(() => {});
    syncControls();
  });
  mobile.addEventListener('change', syncControls);
  syncControls();
})();
