// Greeting name
const username = prompt("Masukkan nama kamu:");
if (username) {
  document.getElementById("username").innerText = username;
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  document.getElementById("result").innerHTML = `
    <h3>Message Sent Successfully</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>
  `;

  this.reset();
});
