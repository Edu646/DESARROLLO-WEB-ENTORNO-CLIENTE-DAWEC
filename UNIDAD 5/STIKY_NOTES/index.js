window.onload = () => {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const navegacion = document.getElementById("navegacion");

    menuToggle.addEventListener("click", () => {
        navegacion.classList.add("show");
        closeMenu.style.display = "block";
    });

    closeMenu.addEventListener("click", () => {
        navegacion.classList.remove("show");
        closeMenu.style.display = "none";
    });

    const crear_nota = document.getElementById("CREAR");
    const botonCerrar = document.getElementById('botonCerrar');
    const botonGuardar = document.getElementById('botonGuardar');
    const ventana = document.getElementById('ventana');
    const nombreNota = document.getElementById('nombreNota');
    const contenidoNota = document.getElementById('contenidoNota');
    const notasContainer = document.getElementById('notas');

    crear_nota.addEventListener('click', () => {
        ventana.style.display = 'block';
        nombreNota.value = '';
        contenidoNota.value = '';
    });

    botonCerrar.addEventListener('click', () => {
        ventana.style.display = 'none';
    });

    botonGuardar.addEventListener('click', () => {
        const titulo = nombreNota.value.trim();
        const contenido = contenidoNota.value.trim();
        
        if (titulo && contenido) {
            const nuevaNota = {
                titulo: titulo,
                contenido: contenido,
                tiempoCreacion: Date.now(),
                tiempoCronometro: 0,  // Añadir el tiempo del cronómetro
                cronometroInterval: null, // Intervalo del cronómetro
                posicion: { x: 0, y: 0 }, // Posición inicial de la nota
            };

            let notas = JSON.parse(localStorage.getItem('notas')) || [];
            notas.push(nuevaNota);
            localStorage.setItem('notas', JSON.stringify(notas));

            mostrarNota(nuevaNota);
            ventana.style.display = 'none';
        } else {
            alert('Por favor, ingresa un título y contenido para la nota.');
        }
    });

    function mostrarNota(nota) {
        const nuevaNotaDiv = document.createElement('div');
        nuevaNotaDiv.classList.add('nota');
        nuevaNotaDiv.setAttribute('draggable', 'true');
        nuevaNotaDiv.style.position = 'absolute';
        nuevaNotaDiv.style.left = `${nota.posicion.x}px`;
        nuevaNotaDiv.style.top = `${nota.posicion.y}px`;

        const tituloNota = document.createElement('h3');
        tituloNota.textContent = nota.titulo;
        
        const contenidoNota = document.createElement('p');
        contenidoNota.textContent = nota.contenido;

        const cronometro = document.createElement('span');
        cronometro.classList.add('cronometro');
        cronometro.textContent = formatTime(nota.tiempoCronometro);
        
        // Iniciar cronómetro
        nota.cronometroInterval = setInterval(() => {
            nota.tiempoCronometro++;
            cronometro.textContent = formatTime(nota.tiempoCronometro);
            actualizarNota(nota); // Guardar en localStorage
        }, 1000);

        const areaTexto = document.createElement('textarea');
        areaTexto.value = nota.contenido;
        areaTexto.style.display = 'none';

        const botonModificar = document.createElement('button');
        botonModificar.textContent = 'Modificar';
        botonModificar.addEventListener('click', () => {
            if (areaTexto.style.display === 'none') {
                areaTexto.style.display = 'block';
                botonModificar.textContent = 'Guardar cambios';
            } else {
                contenidoNota.textContent = areaTexto.value;
                areaTexto.style.display = 'none';
                botonModificar.textContent = 'Modificar';
                actualizarNota(nota, areaTexto.value);
            }
        });

        const botonCerrarNota = document.createElement('button');
        botonCerrarNota.textContent = 'Cerrar';
        botonCerrarNota.addEventListener('click', () => {
            nuevaNotaDiv.remove();
            clearInterval(nota.cronometroInterval); // Detener el cronómetro
            eliminarNota(nota);
        });

        nuevaNotaDiv.appendChild(tituloNota);
        nuevaNotaDiv.appendChild(contenidoNota);
        nuevaNotaDiv.appendChild(areaTexto);
        nuevaNotaDiv.appendChild(cronometro);
        nuevaNotaDiv.appendChild(botonModificar);
        nuevaNotaDiv.appendChild(botonCerrarNota);
        
        notasContainer.appendChild(nuevaNotaDiv);

        nuevaNotaDiv.addEventListener('dragstart', handleDragStart);
        nuevaNotaDiv.addEventListener('dragover', handleDragOver);
        nuevaNotaDiv.addEventListener('drop', handleDrop);
        nuevaNotaDiv.addEventListener('dragend', handleDragEnd);
    }

    function eliminarNota(nota) {
        let notas = JSON.parse(localStorage.getItem('notas')) || [];
        notas = notas.filter(n => n.titulo !== nota.titulo || n.contenido !== nota.contenido);
        localStorage.setItem('notas', JSON.stringify(notas));
    }

    function actualizarNota(nota, nuevoContenido) {
        let notas = JSON.parse(localStorage.getItem('notas')) || [];
        const indice = notas.findIndex(n => n.titulo === nota.titulo && n.contenido === nota.contenido);
        if (indice !== -1) {
            notas[indice].contenido = nuevoContenido || notas[indice].contenido;
            notas[indice].tiempoCronometro = nota.tiempoCronometro; // Actualizar tiempo
            localStorage.setItem('notas', JSON.stringify(notas));
        }
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    let draggedItem = null;

    function handleDragStart(e) {
        draggedItem = e.target;
        e.dataTransfer.setData('text/plain', draggedItem.textContent);
        setTimeout(() => draggedItem.style.opacity = 0.5, 0);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();

        const rect = notasContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        draggedItem.style.position = 'absolute';
        draggedItem.style.left = `${x - draggedItem.offsetWidth / 2}px`;  // Centrado sobre el cursor
        draggedItem.style.top = `${y - draggedItem.offsetHeight / 2}px`;  // Centrado sobre el cursor

        actualizarPosicionNota(draggedItem, x, y);
    }

    function handleDragEnd(e) {
        draggedItem.style.opacity = ''; 
        draggedItem = null;
    }

    function actualizarPosicionNota(nota, x, y) {
        let notas = JSON.parse(localStorage.getItem('notas')) || [];
        const index = notas.findIndex(n => n.titulo === nota.querySelector('h3').textContent);
        if (index !== -1) {
            // Actualizamos la nueva posición
            notas[index].posicion = { x: x - nota.offsetWidth / 2, y: y - nota.offsetHeight / 2 };
            localStorage.setItem('notas', JSON.stringify(notas));
        }
    }

    function cargarNotas() {
        let notas = JSON.parse(localStorage.getItem('notas')) || [];
        notas.forEach(nota => mostrarNota(nota));
    }

    cargarNotas();
}
