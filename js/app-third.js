let emojiInterval;

function showPrompt(dayName, imagePath, emoji, quote) {
    const prompt = document.getElementById('prompt');
    const promptImage = document.getElementById('prompt-image');
    const promptHeading = document.getElementById('prompt-heading');
    const promptQuote = document.getElementById('prompt-quote');

    // Set prompt content
    promptImage.src = imagePath;
    promptHeading.textContent = `Happy ${dayName}!`;
    promptQuote.textContent = quote;

    // Show the prompt
    prompt.style.display = 'block';

    // Clear existing popping emojis
    clearInterval(emojiInterval);
    clearPoppingEmojis();

    // Start popping emojis
    emojiInterval = setInterval(() => createPoppingEmoji(emoji), 300);
}

function closePrompt() {
    const prompt = document.getElementById('prompt');

    // Hide the prompt
    prompt.style.display = 'none';

    // Clear popping emojis
    clearInterval(emojiInterval);
    clearPoppingEmojis();
}

function createPoppingEmoji(emoji) {
    const poppingEmoji = document.createElement('div');
    poppingEmoji.className = 'popping-emoji';
    poppingEmoji.textContent = emoji;

    // Randomize position and animation duration
    poppingEmoji.style.left = Math.random() * 100 + 'vw';
    poppingEmoji.style.animationDuration = Math.random() * 3 + 2 + 's';

    document.body.appendChild(poppingEmoji);

    // Remove emoji after animation
    setTimeout(() => {
        poppingEmoji.remove();
    }, 5000);
}

function clearPoppingEmojis() {
    document.querySelectorAll('.popping-emoji').forEach(emoji => emoji.remove());
}
function zoomHeart() {
    const heart = document.querySelector('.navigate-to-fourth-page');
    heart.classList.add('zoom'); // Add zoom class for animation

    // Navigate to the fourth page after the animation
    setTimeout(() => {
        window.location.href = '/fourth-page.html';
    }, 1000);
}
function navigateToFourthPage() {
    const body = document.querySelector('body');
    body.style.transform = 'scale(0)';
    body.style.transition = 'transform 1s ease-in-out';

    setTimeout(() => {
        window.location.href = '/fourth-page.html';
    }, 1000);
}
