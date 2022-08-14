const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function () { // Paso 1. escucha el click del boton
  let hexColor = "#"; // Paso 2. Inicializa la variable solo con el #
  for (let i = 0; i < 6; i++) { // Paso 3. le da 6 elementos mas a la variable
    hexColor += hex[getRandomNumber()] // Paso 5. toma el resultado de getrandom y lo inclutye en cada uno de sus iteraciones 
  }
  color.textContent = hexColor; // Paso 6. pinta el resultado en la pantalla
  document.body.style.backgroundColor = hexColor; // Paso 7 Pinta el resultado en el body
});

function getRandomNumber() { 
  return Math.floor(Math.random() * hex.length); // Paso 4. Crea un numero aleatorio entre 0 y el numero de elementos de hex
}

