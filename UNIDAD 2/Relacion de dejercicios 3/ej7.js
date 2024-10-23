function palindromo(cad){
    if(cad === cad.split("").reverse().join("")){
        document.write("Es polindrona")
    }else{
        document.write("No es polindrona")
    }
    return cad
}

cad = prompt("Dime una cadena")
palindromo(cad)