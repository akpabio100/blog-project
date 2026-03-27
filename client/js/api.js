const form = document.getElementById('registerForm');
console.log("js is connected");

form.addEventListener('submit', async (e) => {
  console.log("Form submitted");
  e.preventDefault();

  err = "could not submit form";

  const data = {
    username: form.username.value,
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value,
    password: form.password.value
  };

  try {
    // const res = await axios.post("http://localhost:5000/api/auth/register", data);
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: 'POST',cd
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // alert('Registration successful');
    console.log("response:", res);
  } catch (err) {
    // alert(err.response.data.message || 'Error registering');
    console.log("error:", err);

  }
  console.log("JS is connected");
});

