window.onload = () => {
    // Obtener las referencias a los elementos del DOM
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const navegacion = document.getElementById("navegacion");

    // Función para abrir el menú
    menuToggle.addEventListener("click", () => {
        navegacion.classList.add("show"); // Muestra el menú añadiendo la clase 'show'
        closeMenu.style.display = "block"; // Muestra el botón de cerrar
    });

    // Función para cerrar el menú
    closeMenu.addEventListener("click", () => {
        navegacion.classList.remove("show"); // Oculta el menú quitando la clase 'show'
        closeMenu.style.display = "none"; // Oculta el botón de cerrar
    });

    const crear_nota = document.getElementById("CREAR");
    const botonCerrar = document.getElementById('botonCerrar');
    const botonGuardar = document.getElementById('botonGuardar');
    const ventana = document.getElementById('ventana');
    const nombreNota = document.getElementById('nombreNota');
    const contenidoNota = document.getElementById('contenidoNota');
    const notasContainer = document.getElementById('notas');

    // Función para abrir la ventana
    crear_nota.addEventListener('click', () => {
        ventana.style.display = 'block';
        nombreNota.value = ''; // Limpiar el campo del nombre
        contenidoNota.value = ''; // Limpiar el campo de contenido
    });

    // Función para cerrar la ventana
    botonCerrar.addEventListener('click', () => {
        ventana.style.display = 'none';
    });

    // Función para guardar la nota
    botonGuardar.addEventListener('click', () => {
        const titulo = nombreNota.value.trim();  // Obtener el título de la nota
        const contenido = contenidoNota.value.trim();  // Obtener el contenido de la nota
        
        if (titulo && contenido) {
            // Crear un nuevo objeto de nota
            const nuevaNota = {
                titulo: titulo,
                contenido: contenido
            };

            // Recuperar las notas existentes desde localStorage
            let notas = JSON.parse(localStorage.getItem('notas')) || [];

            // Agregar la nueva nota al arreglo de notas
            notas.push(nuevaNota);

            // Guardar el arreglo actualizado en localStorage
            localStorage.setItem('notas', JSON.stringify(notas));

            // Mostrar la nueva nota
            mostrarNota(nuevaNota);

            // Cerrar la ventana después de guardar
            ventana.style.display = 'none';
        } else {
            alert('Por favor, ingresa un título y contenido para la nota.');
        }
    });

    // Función para mostrar una nota
    function mostrarNota(nota) {
        // Crear un div para mostrar la nota
        const nuevaNotaDiv = document.createElement('div');
        nuevaNotaDiv.classList.add('nota');
        
        // Crear el título de la nota
        const tituloNota = document.createElement('h3');
        tituloNota.textContent = nota.titulo;
        
        // Crear el contenido de la nota
        const contenidoNota = document.createElement('p');
        contenidoNota.textContent = nota.contenido;
        
        // Crear un área de texto editable para modificar el contenido
        const areaTexto = document.createElement('textarea');
        areaTexto.value = nota.contenido;  // Inicializar con el contenido de la nota
        areaTexto.style.display = 'none';  // Inicialmente oculta

        // Crear un botón para guardar los cambios
        const botonModificar = document.createElement('button');
        botonModificar.textContent = 'Modificar';
        
        // Función para permitir modificar el contenido
        botonModificar.addEventListener('click', () => {
            if (areaTexto.style.display === 'none') {
                areaTexto.style.display = 'block';  // Mostrar el área de texto
                botonModificar.textContent = 'Guardar cambios';  // Cambiar el texto del botón
            } else {
                contenidoNota.textContent = areaTexto.value;  // Actualizar el contenido con el área de texto
                areaTexto.style.display = 'none';  // Ocultar el área de texto
                botonModificar.textContent = 'Modificar';  // Cambiar el texto del botón a "Modificar"
                
                // Actualizar la nota en localStorage
                actualizarNota(nota, areaTexto.value);
            }
        });

        // Crear un botón de "Cerrar" para eliminar la nota
        const botonCerrarNota = document.createElement('button');
        botonCerrarNota.textContent = 'Cerrar';
        botonCerrarNota.addEventListener('click', () => {
            nuevaNotaDiv.remove();  // Eliminar la nota del DOM
            eliminarNota(nota);  // Eliminar la nota de localStorage
        });

        // Añadir los elementos a la nueva nota
        nuevaNotaDiv.appendChild(tituloNota);
        nuevaNotaDiv.appendChild(contenidoNota);
        nuevaNotaDiv.appendChild(areaTexto);
        nuevaNotaDiv.appendChild(botonModificar);
        nuevaNotaDiv.appendChild(botonCerrarNota);
        
        // Añadir la nueva nota al contenedor
        notasContainer.appendChild(nuevaNotaDiv);
    }

    // Función para eliminar una nota de localStorage
    function eliminarNota(nota) {
        let notas = JSON.parse(localStorage.getItem('notas')) || [];
        notas = notas.filter(n => n.titulo !== nota.titulo || n.contenido !== nota.contenido);
        localStorage.setItem('notas', JSON.stringify(notas));  // Guardar el arreglo actualizado
    }

    // Función para actualizar una nota en localStorage
    function actualizarNota(nota, nuevoContenido) {
        let notas = JSON.parse(localStorage.getItem('notas')) || [];
        const indice = notas.findIndex(n => n.titulo === nota.titulo && n.contenido === nota.contenido);
        if (indice !== -1) {
            notas[indice].contenido = nuevoContenido; // Actualizar el contenido de la nota
            localStorage.setItem('notas', JSON.stringify(notas));  // Guardar las notas actualizadas
        }
    }

    // Cargar las notas guardadas al iniciar la página
    const notas = JSON.parse(localStorage.getItem('notas')) || [];
    notas.forEach(nota => mostrarNota(nota));  // Mostrar todas las notas guardadas
};
