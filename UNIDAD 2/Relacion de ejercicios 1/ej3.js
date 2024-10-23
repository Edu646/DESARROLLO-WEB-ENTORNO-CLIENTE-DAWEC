function contador(){
    for(let i = 60 ; i > 0 ; i--){
        document.write(i + "<br>")
    }
}

setInterval(contador,3000);