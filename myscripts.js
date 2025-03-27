const overlay = document.getElementById('overlay');
const container = document.querySelector('.container');
const audio = document.getElementById('background-audio');
const video = document.getElementById('Video');
window.addEventListener('load', () => {
    video.pause();
    audio.pause();
});
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    container.style.display = 'block';
    video.play();
    audio.play();
});