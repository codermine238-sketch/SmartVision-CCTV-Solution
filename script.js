// 🔥 Get Free Quote button (scroll to contact section)
document.getElementById("quoteBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});


// 🔥 WhatsApp Form Send
document.getElementById("sendQuoteBtn").addEventListener("click", function () {

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let location = document.getElementById("location").value;
  let details = document.getElementById("details").value;

  if (!name || !phone) {
    alert("Please fill name and phone number!");
    return;
  }

  let message = 
`Hello SmartVision CCTV 👋
I want a free quote:

Name: ${name}
Phone: ${phone}
City: ${location}
Details: ${details}`;

  let whatsappURL = "https://wa.me/923019800296?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
});
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
