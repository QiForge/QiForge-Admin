const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "admin@qiforge.org" && password === "admin123") {
    localStorage.setItem("superAdmin", "false");
    window.location.href = "dashboard.html";
  } else if (email === "yogesh@qiforge.org" && password === "root") {
    localStorage.setItem("superAdmin", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
});

// Hidden shortcut Ctrl+Shift+S = Super Admin
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === "S") {
    localStorage.setItem("superAdmin", "true");
    alert("Super Admin mode activated");
  }
});
