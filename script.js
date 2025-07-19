  document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      message: form.message.value
    };

    fetch("https://script.google.com/macros/s/AKfycbzcLmJIXHE-9lfU7Udt-s_tqnWPF0rA_eviPXyxROs8o3CwwKAzVh8VCt9rlE5jdssP/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
      if (response.status === "success") {
        alert("Booking submitted successfully!");
        form.reset();
      } else {
        alert("Error: " + response.message);
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      alert("Something went wrong. Please try again.");
    });
  });
