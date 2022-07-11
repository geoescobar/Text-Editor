const installBtn = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installBtn.style.visibility = "visible";
  // TODO: Implement a click event handler on the `installBtn` element
  installBtn.addEventListener("click", () => {
    event.prompt();
    installBtn.setAttribute("disabled", true);
    installBtn.textContent = "Installed!";
  });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  textHeader.textContent = "Successfully installed!";
  console.log("app-installed", event);
});
