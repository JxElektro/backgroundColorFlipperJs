const colors = ["green", "red", "rgba(133,122,200", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () { // Paso 1. cuando es pulsado click se inicia
  //get random number btween 0-3,color [3]
  const randomNumber = getRandomNumber(); // Paso 4 Crea la var numero aleatorio con la funcion de abajo
  document.body.style.backgroundColor = colors[randomNumber] // Paso 5 Le da estilo al fondo del body con el numero aleatorio
  color.textContent = colors[randomNumber] // paso 6 imprime en pantalla el numero aleatorio
});

function getRandomNumber(){  // Paso 2 . Seleccionara un numero aleatorio
  return Math.floor(Math.random()*colors.length); // Paso 3 Numero entero redondeado entre 0 y la cantidad de elementos en colors
};