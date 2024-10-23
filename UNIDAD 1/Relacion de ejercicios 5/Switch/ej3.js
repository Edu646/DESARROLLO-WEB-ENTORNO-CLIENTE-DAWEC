let variable1  = parseInt(prompt("Dame un numero"));
let variable2  = parseInt(prompt("Dame otro numero"));

let operacion =(prompt("Dime la operacion"));

let suma= variable1 + variable2;
let resta= variable1 - variable2;
let division= variable1 / variable2;
let multiplicacion= variable1 *variable2

switch(operacion){
    case "suma" :
        document.write("La suma es: " + suma)
        break;
        case "resta" :
            document.write("La suma es: " + resta)
            break;
            case "division" :
                document.write("La suma es: " + division)
                break;
                case "multiplicacion" :
                    document.write("La suma es: " + multiplicacion)
                    break;
}