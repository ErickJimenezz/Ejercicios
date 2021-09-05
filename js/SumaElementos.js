let num = [10, 20, 30, 20, 30, 40, 60];
let sum = num.reduce((previous, current) => current += previous);
let ressultado = sum / num.length;

console.log(num);
console.log(("El promedio de este arreglo es:")+ressultado);

let html ='';
num.forEach(prod => {
    html += `<li>${prod}</li>`
}
    );
const Contenedor = document.querySelector(`#Promedio`);
Contenedor.innerHTML = html;
const Contenedor2 = document.querySelector(`#Resultado`);
Contenedor2.innerHTML = ressultado;