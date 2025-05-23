// function redirectTo(page) {
//   window.location.href = page;
// }

function viewDemo() {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

function redirectTo(page) {
  window.location.href = page;
}

// Gán sự kiện cho cả hai nút
document.addEventListener("DOMContentLoaded", function () {
  // Nút trên Topbar
  const authButton = document.querySelector(".auth-button");
  if (authButton) {
      authButton.addEventListener("click", function () {
          redirectTo("../pages/login.html");
      });
  }

  // Nút trong Main Section
  const primaryButton = document.querySelector(".btn.primary");
  if (primaryButton) {
      primaryButton.addEventListener("click", function () {
          redirectTo("../pages/login.html");
      });
  }
});

// Gán sự kiện cho nút "Get Started"
const getStartedButton = document.querySelector(".cta .btn.primary");
if (getStartedButton) {
    getStartedButton.addEventListener("click", function () {
        redirectTo("../pages/login.html");
    });
}
