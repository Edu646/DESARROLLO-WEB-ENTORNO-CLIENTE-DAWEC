

function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(mostrarUbicacion, errorUbicacion, { timeout: 2000 });
  } else {
    document.write("Tu navegador no soporta geolocalización.");
  }
}

function mostrarUbicacion(position) {
  const latitud = position.coords.latitude;
  const longitud = position.coords.longitude;

  document.write("Tu ubicación es: Latitud: " + latitud + ", Longitud: " + longitud +"<br>");

}

function errorUbicacion(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      document.write("El usuario no permitió el acceso a la ubicación.");
      break;
    case error.POSITION_UNAVAILABLE:
      document.write("No se pudo determinar la ubicación.");
      break;
    case error.TIMEOUT:
      document.write("La petición de geolocalización ha caducado.");
      break;
    case error.UNKNOWN_ERROR:
      document.write("Se ha producido un error desconocido.");
      break;
  }
}


obtenerUbicacion();

