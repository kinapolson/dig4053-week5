document.querySelector('.dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.add('theme-transition');

    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }

    setTimeout(function () {
        document.body.classList.remove('theme-transition');
    }, 350);
});
