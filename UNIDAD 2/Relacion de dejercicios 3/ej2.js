function Explicarcadena(cad){
    if(cad === cad.toUpperCase()){
        document.write("La cadena esta en mayuscula")
    }else if(cad === cad.toLowerCase()){
        document.write("La cadena esta minuscula")
    }else{
        document.write("La cadena contiene mayusculas y minusculas")
    }

    return cad

}
cad = prompt("Dime una cadena")

Explicarcadena(cad)