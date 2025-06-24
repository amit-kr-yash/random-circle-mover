const button = document.getElementById("moveBtn");
const circle = document.getElementById("circle");

    button.addEventListener("click", () => {
      const circleDiameter = 100;
      const maxX = window.innerWidth - circleDiameter;
      const maxY = window.innerHeight - circleDiameter;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      circle.style.left = `${randomX}px`;
      circle.style.top = `${randomY}px`;
    });