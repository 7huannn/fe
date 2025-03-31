document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("sidebar-toggle");
    const sidebarMenu = document.getElementById("sidebar-menu");
  
    toggleBtn.addEventListener("click", () => {
      sidebarMenu.classList.toggle("hidden");
    });
  });
  