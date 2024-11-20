window.onload = () => {
    var circulo = document.getElementById('circulo'); 

    var Posx = 100; 
    var radio = 50; 
    var limitex = 400; 
    var velocidadx = 5; 

    var Posy = 100; 
    var limitey = 200; 
    var velocidady = 5; 


   
    function mover_pelota() {
     
        Posx += velocidadx;
        Posy += velocidady;
   
        if (Posx + radio >= limitex || Posx - radio <= 0) {
            velocidadx *= -1;
        }
        if( Posy + radio >= limitey || Posy - radio <= 0){
            velocidady *= -1;
        }

        
     
        circulo.setAttribute('cx', Posx);
        circulo.setAttribute('cy', Posy);
    }


    setInterval(mover_pelota, 1000 / 60);
};