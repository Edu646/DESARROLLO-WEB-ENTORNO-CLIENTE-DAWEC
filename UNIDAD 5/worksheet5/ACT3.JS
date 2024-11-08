const input = document.getElementById('username');
const listaItems = document.querySelectorAll('li');

input.addEventListener('input', () => {
  const texto = input.value;
  const tieneMinusc = /[a-z]/.test(texto);
  const tieneMayusc = /[A-Z]/.test(texto);
  const tieneMinimo6 = texto.length >= 6;

  listaItems[0].classList.toggle('correcto', tieneMinusc);
  listaItems[1].classList.toggle('correcto', tieneMayusc);
  listaItems[2].classList.toggle('correcto', tieneMinimo6);
});