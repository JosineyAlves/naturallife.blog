document.addEventListener('DOMContentLoaded', function() {
    const dateDisplay = document.getElementById('dateDisplay');
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.innerText = date.toLocaleDateString('en-US', options);
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('nyt-nav');
    nav.classList.toggle('active'); // Alternar a classe 'active'
});