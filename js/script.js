function toggleMenu() {
  var nav = document.querySelector(".nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card-2");

  cards.forEach((card) => {
    const randomColor = generateRandomColor();
    card.style.backgroundColor = randomColor;
  });

  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
