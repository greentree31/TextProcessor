const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.removeAttribute("hidden", false);
});

butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
      return;
  }
  promptEvent.prompt();
  const result = await promptEvent.userChoice;
  if (result.outcome === 'accepted') {
      console.log('User accepted the install prompt');
  } else {
      console.log('User dismissed the install prompt');
  }
  window.deferredPrompt = null;
  butInstall.setAttribute('hidden', true);
});

window.addEventListener("appinstalled", (event) => {
        window.deferredPrompt = null;
});
