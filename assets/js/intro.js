$(document).ready(function () {
    // Mostrar contenido
    $('.intro-box').css({opacity: 1});

    // Obtener tamaño del contenido para el cuadro
    const box = $('.intro-box');
    const outline = $('.outline');
    const width = box.outerWidth() + 40; // 20px margen a cada lado
    const height = box.outerHeight() + 40;

    outline.css({width: width + 'px', height: height + 'px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'});

    // Animación del cuadro
    setTimeout(() => {
        // Línea inferior
        $('.line.bottom').animate({width: '100%'}, 400, function () {
            // Líneas laterales subiendo
            $('.line.left').animate({height: '100%'}, 400);
            $('.line.right').animate({height: '100%'}, 400, function () {
                // Línea superior cerrando
                $('.line.top').animate({width: '100%'}, 400);
            });
        });
    }, 300); // Pequeña demora para que aparezca el contenido

    // FadeOut y redirección
    setTimeout(() => {
        $('#intro').fadeOut(1000, function () {
            window.location.href = "home.html";
        });
    }, 3000); // total 3s antes de ir a home
});
