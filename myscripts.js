document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const container = document.querySelector('.container');
    const content = document.querySelector('.content');
    const video = document.getElementById('video');
    const audio = document.getElementById('background-audio');
    const scrollBtn = document.getElementById('scrollToTopBtn');
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.section');


    video.pause();
    audio.pause();


    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        container.style.display = 'block';
        content.style.display = 'block';
        video.play();
        audio.play();

        document.getElementById('gioithieu').classList.add('active');
    });


    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));


            link.classList.add('active');
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});