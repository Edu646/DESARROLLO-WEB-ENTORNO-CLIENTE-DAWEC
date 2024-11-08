window.onload = function colors() {
  const contenedor = document.getElementById('container');
  const textoColor = document.getElementById("color_correcto");

  function generarColorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function pickRandomDivColor() {
    const divs = contenedor.querySelectorAll('.container1');
    if (divs.length === 0) {
      alert("There are no '.container1' elements to choose from. Please create some first.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * divs.length);
    const randomDiv = divs[randomIndex];
    const randomColor = randomDiv.style.backgroundColor;

    textoColor.textContent = randomColor;
    return randomColor;
  }

  function checkWin(clickedDivColor) {
    const correctColor = textoColor.textContent;

    if (clickedDivColor === correctColor) {
      contenedor.classList.add("win"); 

      if (document.getElementById("win_message")) {
        document.getElementById("win_message").textContent = "You won!";
      } else {
        alert("You won!"); 
      }
    }
  }

  for (let i = 0; i < 6; i++) {
    const div = document.createElement('div');
    div.classList.add('container1');
    div.style.backgroundColor = generarColorAleatorio();
    contenedor.appendChild(div);

    div.addEventListener("click", function() {
      const clickedDivColor = this.style.backgroundColor;
      checkWin(clickedDivColor);
    });
  }


  const easyButton = document.getElementById("easy_mode");

  easyButton.addEventListener("click", function() {
    contenedor.classList.remove("win"); 
    textoColor.textContent = "";

   
    const existingDivs = contenedor.querySelectorAll('.container1');
    for (let div of existingDivs) {
      contenedor.removeChild(div);
    }

  
    for (let i = 0; i < 3; i++) {
      const div = document.createElement('div');
      div.classList.add('container1');
      div.style.backgroundColor = generarColorAleatorio();
      contenedor.appendChild(div);

      div.addEventListener("click", function() {
        const clickedDivColor = this.style.backgroundColor;
        checkWin(clickedDivColor);
      });
    }
    pickRandomDivColor(); 
  });



  const hardButton = document.getElementById("hard_mode");

  hardButton.addEventListener("click", function() {
    contenedor.classList.remove("win"); 
    textoColor.textContent = "";

   
    const existingDivs = contenedor.querySelectorAll('.container1');
    for (let div of existingDivs) {
      contenedor.removeChild(div);
    }

  
    for (let i = 0; i < 6; i++) {
      const div = document.createElement('div');
      div.classList.add('container1');
      div.style.backgroundColor = generarColorAleatorio();
      contenedor.appendChild(div);

      div.addEventListener("click", function() {
        const clickedDivColor = this.style.backgroundColor;
        checkWin(clickedDivColor);
      });
    }
    pickRandomDivColor(); 
  });

  

  const newColorButton = document.getElementById("new_col");

  newColorButton.addEventListener("click", function() {
    
    contenedor.classList.remove("win"); 
    textoColor.textContent = ""; 

    
    for (let div of contenedor.querySelectorAll('.container1')) {
      div.style.backgroundColor = generarColorAleatorio();
    }

    pickRandomDivColor(); 

  });

  pickRandomDivColor(); 

};