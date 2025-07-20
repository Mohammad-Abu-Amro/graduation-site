let change = document.getElementById("change");
let container = document.querySelector(".container");
let header = document.querySelector(".header");

change.addEventListener("click", () => {
  container.classList.toggle("dark-mode");
  header.classList.toggle("header-dark");
  if (container.classList.contains("dark-mode")) {
    change.textContent = "🌙 الوضع الليلي";
  } else {
    change.textContent = "☀️ الوضع النهاري";
  }
});

const partyButton = document.getElementById("ohh");

partyButton.addEventListener("click", () => {
  // تأثير احتفالي
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });

  // إضافة تفاعل بصري إضافي (مثلاً هزة أو لون)
  partyButton.style.animation = "shake 0.4s";
  setTimeout(() => {
    partyButton.style.animation = "";
  }, 400);
});

let ohh = document.getElementById("ohh").addEventListener("click", () => {
  const celebrationSound = document.getElementById("celebrationSound");
  celebrationSound.play();
});

function copyLink() {
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      alert("تم نسخ الرابط! 🎉");
    })
    .catch((err) => {
      alert("حدث خطأ أثناء نسخ الرابط");
      console.error(err);
    });
}
