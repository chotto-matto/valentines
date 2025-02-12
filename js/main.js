function scrollToContent() {
    document.getElementById("content").scrollIntoView({ behavior: 'smooth' });
}
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.querySelector('.floating-hearts').appendChild(heart);
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const music = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');

function toggleMusic() {
    if (music.paused) {
        music.play();
        muteBtn.textContent = "🔊";
    } else {
        music.pause();
        muteBtn.textContent = "🔇";
    }
}

// Autoplay when the page loads
window.addEventListener('load', () => {
    music.volume = 0.5; // Adjust volume
    music.play().catch(() => {
        // Handle autoplay restrictions (if any)
        muteBtn.textContent = "🔇";
    });
});
