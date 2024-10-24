const btn = document.getElementsByTagName("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn[0].addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

function numero_uno_al_diez(){
    for(var i = 0; i <= 20; i++){
        document.write(i);
    }

}


function cierra_nav(){
    window.close()
}

btn[1].addEventListener("click",() => cierra_nav())
