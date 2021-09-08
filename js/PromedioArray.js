let num = [10, 20, 30, 20, 30, 40, 60];
let sum = num.reduce((anterior, current) => current += anterior);
let resultado = sum / num.length;

console.log(num);
console.log(("El promedio de este arreglo es:") + resultado);

let html = '';
num.forEach(prod => {
    html += `<li>${prod}</li>`


    const Contenedor2 = document.querySelector(`#promedio`);
    Contenedor2.innerHTML = resultado;
});