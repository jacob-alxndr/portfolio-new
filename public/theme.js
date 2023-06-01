(function initTheme() {
  const theme = localStorage.getItem("user-theme") || "dark";
  if (theme === `"light"`) {
    document.documentElement.setAttribute("user-theme", "light");
    localStorage.setItem("user-theme", "light");
  }
})();
