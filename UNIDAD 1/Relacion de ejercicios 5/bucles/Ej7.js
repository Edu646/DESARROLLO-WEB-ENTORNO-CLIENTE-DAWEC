let num1 = parseInt(prompt("Dime el numero a adivinar"))
let num2
do{
    num2 = parseInt(prompt("Dime otro numero"))
    if(num2 >num1){
        document.write("El numero es mas pequeño")
    }
    else if (num2 < num1){
        document.write("El numero es mas grande")
    }
}while (num1 != num2)

document.write("HAS ACERTADO");