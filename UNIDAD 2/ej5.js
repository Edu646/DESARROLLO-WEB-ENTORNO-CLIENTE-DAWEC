function muestraPosicion (pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 15); 
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
  
  
    var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
  }
  

  navigator.geolocation.watchPosition(muestraPosicion );

 /* var animatedMarker = L.animatedMarker([40.4168, -3.7038], {
    icon: L.icon({
        iconUrl: 'your-marker-icon.png',
        iconSize: [25, 40],
        iconAnchor: [12, 40],
        popupAnchor: [0, -40]
    }),
    autoStart: true, 
    interval: 2000 
}).addTo(map);


var userCoordinates = [];

userCoordinates.push([latitude, longitude]);

var userRoute = L.polyline(userCoordinates, {
    color: 'green',
    weight: 3
}).addTo(map);*/




    