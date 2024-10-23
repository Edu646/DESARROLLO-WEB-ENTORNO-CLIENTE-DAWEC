let n_hermanos = parseInt(prompt("Dime el numero de hermanos"));
let cantidad = parseInt(prompt("Dime una cantidad "));

let descuento15 = (cantidad * 15) / 100;
let descuento5 = (cantidad * 5) / 100;

let resta15 =  cantidad - descuento15;
let resta5 = cantidad - descuento5;

if(n_hermanos > 3){
    document.write("El resultado de la cantidad con el descuento aplicado es de: " +resta15
    )
}

else if (n_hermanos < 3){
    document.write("El resultado de la cantidad con el descuento aplicado es de: "+ resta5)
}

else{
    document.write("No tiene hermanos por lo que la cantidad se queda como estaba" +cantidad)
}