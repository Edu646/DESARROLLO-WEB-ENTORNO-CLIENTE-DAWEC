let trabajo1 = parseFloat(prompt("Dime la nota: "));
let trabajo2= parseFloat(prompt("Dime la nota: "));
let examen1 = parseFloat(prompt("Dime la nota: "));
let examen2= parseFloat(prompt("Dime la nota: "));

let suma_trabajos = trabajo1 + trabajo2;
let mediatrabajos = (( suma_trabajos/ 2)* 25)/100

let suma_examenes = examen1 + examen2;
let mediaexamenes = (( suma_examenes/ 2)* 75)/100

let mediatotal = mediaexamenes + mediatrabajos;

if (mediatotal > 5){
    document.write("Esta aprobado")
} else if (trabajo1 == 4.5 && trabajo2 == 4.5 && examen1 == 4.5 && examen2 == 4.5){
    document.write("Esta aprobado")
}
else {
    document.write("Esta Suspenso")
}
