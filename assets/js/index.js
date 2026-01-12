const intro = document.querySelector("#intro");

setTimeout(() => {
    intro.style.transition = "opacity 1s ease-out";
    intro.style.opacity = 0;

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
}, 2000);
