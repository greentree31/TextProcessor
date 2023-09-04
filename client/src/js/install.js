const butInstall = document.getElementById("buttonInstall");

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.removeAttribute("hidden", false);
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.choiceResult = await promptEvent.userChoice;
  butInstall.setAttribute("hidden", true);
});
window.addEventListener("appinstalled", (event) => {
        window.deferredPrompt = null;
});
