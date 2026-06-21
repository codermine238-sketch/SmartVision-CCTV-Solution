document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // SAFE GET
  // =========================
  const get = (id) => document.getElementById(id);

  const contact = get("contact");
  const quoteBtn = get("quoteBtn");

  // =========================
  // SMOOTH SCROLL FUNCTION
  // =========================
  function scrollToEl(el) {
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  // =========================
  // HERO BUTTON FIX
  // =========================
  if (quoteBtn) {
    quoteBtn.addEventListener("click", function () {
      scrollToEl(contact);
    });
  }

  // =========================
  // NAV LINKS FIX
  // =========================
  document.querySelectorAll("a[href='#contact']").forEach(a => {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToEl(contact);
    });
  });

  // =========================
  // ALL INTERNAL LINKS SMOOTH
  // =========================
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {

      const id = this.getAttribute("href").replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        e.preventDefault();
        scrollToEl(el);
      }

    });
  });

  // =========================
  // WHATSAPP FORM FIX
  // =========================
  const sendBtn = get("sendQuoteBtn");

  if (sendBtn) {
    sendBtn.addEventListener("click", function () {

      const name = get("name")?.value.trim();
      const phone = get("phone")?.value.trim();
      const location = get("location")?.value.trim();
      const details = get("details")?.value.trim();

      if (!name || !phone) {
        alert("Please enter Name and Phone!");
        return;
      }

      const message =
`Hello SmartVision CCTV 👋
Free Quote Request:

Name: ${name}
Phone: ${phone}
City: ${location || "Not provided"}
Message: ${details || "No details"}`;

      const url = "https://wa.me/923019800296?text=" + encodeURIComponent(message);

      window.open(url, "_blank");

    });
  }

});
