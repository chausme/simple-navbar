const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', e => {
    links.classList.toggle('collapsed');
    let button = e.target;
    if (e.target.nodeName === 'I') {
        button = e.target.parentElement;
    }
    button.classList.toggle('collapsed');
});
