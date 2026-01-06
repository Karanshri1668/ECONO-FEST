function openForm(type) {
  document.getElementById("formSection").classList.remove("hidden");
  document.getElementById("paymentSection").classList.add("hidden");

  const frame = document.getElementById("formFrame");

  if (type === "mock") {
    frame.src =
      "https://docs.google.com/forms/d/e/1FAIpQLSc8AURmsAdtzmXIWEkO9lI_XLAsd5p2IC9mj5uztxzTR7a3Tg/viewform?embedded=true";
  } else {
    frame.src =
      "https://docs.google.com/forms/d/e/1FAIpQLSfJYIVr8VRj2DvHRP3kxxqyHdignGcNpikvEyggT1Re1szC2Q/viewform?embedded=true";
  }

  window.scrollTo({
    top: document.getElementById("formSection").offsetTop - 20,
    behavior: "smooth"
  });
}

function showPayment() {
  const paymentSection = document.getElementById("paymentSection");
  const formSection = document.getElementById("formSection");

  formSection.classList.add("hidden");
  paymentSection.classList.remove("hidden");

  // ✅ Scroll to payment section, not top
  paymentSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

let selectedEvent = ""; // will store which event user selected

function openForm(type) {
  selectedEvent = type; // SAVE EVENT TYPE

  document.getElementById("formSection").classList.remove("hidden");
  document.getElementById("paymentSection").classList.add("hidden");

  const frame = document.getElementById("formFrame");

  if (type === "mock") {
    frame.src =
    "https://docs.google.com/forms/d/e/1FAIpQLSc8AURmsAdtzmXIWEkO9lI_XLAsd5p2IC9mj5uztxzTR7a3Tg/viewform?embedded=true";
  } else if (type === "research") {
    frame.src =
    "https://docs.google.com/forms/d/e/1FAIpQLSfJYIVr8VRj2DvHRP3kxxqyHdignGcNpikvEyggT1Re1szC2Q/viewform?embedded=true";
  }

  document.getElementById("formSection").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function showPayment() {
  const paymentSection = document.getElementById("paymentSection");
  const whatsappBtn = document.getElementById("whatsappLink");

  document.getElementById("formSection").classList.add("hidden");
  paymentSection.classList.remove("hidden");

  // 🔥 SET WHATSAPP LINK BASED ON EVENT
  if (selectedEvent === "mock") {
    whatsappBtn.href = "https://chat.whatsapp.com/EW7VuMV8rV25x8yO5MSVoV";
  } else if (selectedEvent === "research") {
    whatsappBtn.href = "https://chat.whatsapp.com/KmLDcod1gwg2ZpZXCaJy29";
  } else {
    whatsappBtn.href = "#"; // fallback
  }

  paymentSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
