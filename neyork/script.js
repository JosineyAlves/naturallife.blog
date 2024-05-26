document.addEventListener('DOMContentLoaded', function() {
    const dateDisplay = document.getElementById('dateDisplay');
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.innerText = date.toLocaleDateString('en-US', options);

    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nyt-nav');
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});