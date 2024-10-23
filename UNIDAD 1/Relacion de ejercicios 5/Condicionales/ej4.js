let numero = parseInt(prompt("Dime un numero"));

let descuento = (numero * 15)/100;

if(numero > 100)
    {
        document.write("Con el descuento se queda en:" + descuento);
    }
    else{
        document.write("El numero es menor de 100")
    };