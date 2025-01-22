
function cargarJSON() {
  
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'ejemplo.json', true);


    xhr.onload = function() {
        if (this.status === 200) {
           
            const datos = JSON.parse(this.responseText);

        
            let html = `
                
                <li><strong>Nombre:</strong> ${datos.nombre}</li>
                <li><strong>Edad:</strong> ${datos.edad}</li>
                <li><strong>Correo:</strong> ${datos.correo}</li>
                <li><strong>Dirección:</strong> ${datos.direccion.calle}, ${datos.direccion.numero}, ${datos.direccion.ciudad}, ${datos.direccion.pais}</li>
                <li><strong>Intereses:</strong> ${datos.intereses.join(', ')}</li>
                <li><strong>Activo:</strong> ${datos.activo ? 'Sí' : 'No'}</li>
            `;

            document.getElementById('contenido').innerHTML = html;
        } else {
            console.error('No se pudo cargar el JSON');
        }
    };

  
    xhr.onerror = function() {
        console.error('Error de red al cargar el JSON');
    };


    xhr.send();
}


document.addEventListener('DOMContentLoaded', cargarJSON);
