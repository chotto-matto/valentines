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
