document.addEventListener('DOMContentLoaded', () => {
  const sayHiBtn = document.getElementById('sayHiBtn');
  const toastLive = document.getElementById('liveToast');

  if (sayHiBtn && toastLive) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
    sayHiBtn.addEventListener('click', () => {
      toastBootstrap.show();
      console.log("Say Hi button clicked!");
    });
  }

  // Optional reusable toast function
  function initToastInteraction(buttonId, toastId) {
    const button = document.getElementById(buttonId);
    const toast = document.getElementById(toastId);

    if (button && toast) {
      const toastInstance = bootstrap.Toast.getOrCreateInstance(toast);
      button.addEventListener('click', () => toastInstance.show());
    }
  }

  // 🌙 Dark Mode Toggle
  const toggleBtn = document.getElementById('darkModeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggleBtn.innerText = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
      console.log("Dark mode toggled!");
    });
  }
});
