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

