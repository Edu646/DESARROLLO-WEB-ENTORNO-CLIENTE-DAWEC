function validationCreditCard(creditCard){
    
    creditCard = creditCard.split("-").join('');
    

    if(creditCard.length !== 16){
        return false;
    }
    
    if(/\D/.test(creditCard)){
        return false;
    }

    
    const primerNumero = creditCard[0];
    let iguales = true;
    for(let i = 1; i<creditCard.length;i++ ){
        if(creditCard[i] !== primerNumero){
           iguales = false;
        }
    }
    if(creditCard[15] %2 !== 0){
        return false;
    }
    let suma = 0;
    for(let i = 1; i<creditCard.length;i++ ){
        suma = suma + creditCard[i];
    }
    if(suma<= 16){
        return false;
    }
    
        
    return !iguales;  
}

let tarjeta = (prompt("Dime la tarjeta de credito"));
document.write(validationCreditCard(tarjeta));