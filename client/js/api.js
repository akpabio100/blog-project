const form = document.getElementById('registerForm');

form.addEventListener('submit', async (e) => {
  console.log("Form submitted");
  e.preventDefault();


  const data = {
    username: form.username.value,
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value,
    password: form.password.value
  };

  try {
    const res = await fetch(REGISTER_ENDPOINTS.registerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await res.json(); // 👈 IMPORTANT
    console.log("Backend response:", result);

  } catch (err) {
    console.log("error:", err);
  }
});


// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const errorBox = document.getElementById("errorBox");
    errorBox.classList.add("hidden");

    const data = {
      identifier: loginForm.identifier.value,
      password: loginForm.password.value
    };

    try {
      const res = await fetch(LOGIN_ENDPOINTS.loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      // Save token
      localStorage.setItem("token", result.token);

    } catch (err) {
      errorBox.textContent = err.message || "Login failed";
      errorBox.classList.remove("hidden");
    }
  });
}