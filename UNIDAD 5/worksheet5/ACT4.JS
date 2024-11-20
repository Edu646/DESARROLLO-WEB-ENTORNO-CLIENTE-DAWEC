
window.onload = (event)=>{
// CODIGO PARA QUE EL MENU SE PUEDA DESPLEGAR
function abrirMenu() {
    document.querySelector('.nav-menu').style.display = 'block';
}

// Función para cerrar el menú
function cerrarMenu() {
    document.querySelector('.nav-menu').style.display = 'none';
}

// Evento para abrir el menú al hacer clic en el botón
document.querySelector('.menu-btn').onclick = abrirMenu;

document.querySelector('.close-btn').onclick = cerrarMenu;
}
