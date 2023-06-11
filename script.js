//SELECTS THE HAMBURGER IN THE HTML
const hamburger = document.querySelector('.hamburger');
//SELECTS THE OVERLAY IN THE HTML
const overlay = document.querySelector('.overlay');

//EVENT LISTENER WAITS FOR EVENT(CLICK) TO HAPPEN, THEN TOGGLES THE DISPLAY OF THE OVERLAY
hamburger.addEventListener('click', function () {
    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'block';
    }
});
