document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navOptions = document.getElementById('nav-options');

    hamburger.addEventListener('click', () => {
        if (navOptions.style.display === 'flex') {
            navOptions.style.display = 'none';
        } else {
            navOptions.style.display = 'flex';
        }
    });
});