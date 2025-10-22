const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "yogesh@qiforge.org" && password === "root") {
    alert("Welcome, Super Admin (Yogesh)");
    window.location.href = "dashboard.html";
  } else if (email === "admin@qiforge.org" && password === "admin123") {
    alert("Welcome Admin");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Access denied.");
  }
});
