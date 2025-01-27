// Create Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️'; // Heart emoji
    heart.style.left = Math.random() * 100 + 'vw'; // Random position
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration
    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Remove heart after animation
    }, 5000);
}

// Start Floating Hearts on Page Load
setInterval(createHeart, 500); // Create a heart every 500ms

// Handle Heart Click
function handleHeartClick() {
    const letter = document.getElementById('letter');
    letter.classList.add('zoom-out'); // Trigger letter zoom-out animation

    // Redirect to the next page after animation
    setTimeout(() => {
        window.location.href = '/next-page.html';
    }, 2000);
}

// Add Click Event to the Heart
document.getElementById('heart-container').addEventListener('click', handleHeartClick);