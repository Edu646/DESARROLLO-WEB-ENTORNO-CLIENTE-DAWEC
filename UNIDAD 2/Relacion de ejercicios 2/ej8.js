/* 8. Crea una web en la que cada vez que se accede se muestre una imagen
(de modo aleatorio) de entre 3 posibles*/

let numero = parseInt(Math.random()*(4-1)+1) 

if(numero == 1){
    document.write('<img src="./1900x1900-000000-80-0-0.jpg">')
}else if(numero == 2){
    document.write('<img src="./BB_T5A-Walter_White.png">')
}else if(numero == 3){
    document.write('<img src="./descarga.png">')
}