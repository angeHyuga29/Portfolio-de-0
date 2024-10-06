const imagen = document.querySelector('.img-circular');

imagen.addEventListener('mouseenter', () => {
    imagen.style.transform = 'scale(1.2)'; // Ampliar solo la imagen
});

imagen.addEventListener('mouseleave', () => {
    imagen.style.transform = 'scale(1)'; // Restablecer tamaño
});

document.getElementById('navbarToggle').addEventListener('click', function() {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('show'); // Alternar la clase 'show' para mostrar/ocultar
});
