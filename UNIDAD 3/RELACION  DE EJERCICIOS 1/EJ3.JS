function lanzamiento(){
    n = Math.floor(Math.random()*(6-1+1)+1)
   return n;
}




function simulacion (){
   let numero;
   let veces = [0,0,0,0,0,0]
   for(let i = 0 ; i< 6000 ; i++){
      numero = lanzamiento();
      veces[numero -1]++
       
   }

   for(let j = 0; j < 6; j++ ){
    document.write("El numero " + (j+1) + "a salido" + veces[j])
   }
}


(simulacion());