document.getElementById("quoteBtn").onclick = () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("sendQuoteBtn").onclick = () => {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;
  const details = document.getElementById("details").value;

  if (!name || !phone || !location || !details) {
    alert("Please fill all fields");
    return;
  }

  const msg = `Name: ${name}%0APhone: ${phone}%0ALocation: ${location}%0ADetails: ${details}`;
  window.open(`https://wa.me/923019800296?text=${msg}`);
};
document.getElementById("quoteBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});