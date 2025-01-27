document.addEventListener("DOMContentLoaded", function () {
  const giftLid = document.getElementById("gift-lid");
  const heartsContainer = document.getElementById("hearts-container");
  const giftBox = document.querySelector(".gift-box");

  giftBox.addEventListener("click", function () {
    // Disable further clicks
    giftBox.style.pointerEvents = "none";

    // Open the gift box lid
    giftLid.style.transform = "rotateX(-90deg)";

    // Start the heart animation
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Randomize heart position
        const top = Math.random() * 50 + 20; // Between 20% and 70%
        const left = Math.random() * 80 + 10; // Between 10% and 90%
        heart.style.top = `${top}%`;
        heart.style.left = `${left}%`;

        // Randomize animation duration
        const duration = Math.random() * 2 + 2; // Between 2s and 4s
        heart.style.animationDuration = `${duration}s`;

        // Add the heart to the container
        heartsContainer.appendChild(heart);

        // Remove the heart after animation ends
        setTimeout(() => heart.remove(), duration * 1000);
      }, i * 200); // Delay each heart creation slightly
    }
  });
});
