let toda_la_banda = ["Diana", "Monica", "Maria", "Breny"];

console.log(toda_la_banda);

let html ='';
toda_la_banda.forEach(prom => {
   
    html += `<ul > <li>${prom}</li></ul>`
}
    );
const Contenedor1 = document.querySelector(`#nombres`);
Contenedor1.innerHTML = html;