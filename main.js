document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  const responseBox = document.getElementById("response");
  responseBox.innerText = "Logging in...";

  try {
    const res = await fetch("https://skill-swap-backend-io0v.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      responseBox.innerText = "Login Successful!";
      console.log("Token:", data.token);
    } else {
      responseBox.innerText = data.message || "Login failed!";
    }
  } catch (err) {
    console.error(err);
    responseBox.innerText = "Server error. Try again later.";
  }
});
