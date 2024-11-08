const pantalla = document.getElementById('pantalla');

pantalla.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;

    console.log(`Toque en: X=${x}, Y=${y}`);
});

pantalla.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;

    console.log(`Movimiento en: X=${x}, Y=${y}`);
});

pantalla.addEventListener('touchend', (event) => {
    console.log('Toque finalizado');
});