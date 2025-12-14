function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Please enter username and password");
    return;
  }

  localStorage.setItem("user", user);

  // Redirect to next page
  window.location.href = "todo.html";
}
