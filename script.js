document.querySelectorAll(".booking-form").forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      message: form.message.value
    };

    fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(data).toString()
    })
    .then(response => response.json())
    .then(result => {
      if (result.status === "success") {
        alert("Booking successful!");
        form.reset();
      } else {
        alert("Error: " + result.message);
      }
    })
    .catch(error => {
      alert("Error: " + error);
    });
  });
});
