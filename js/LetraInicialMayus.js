const datos = "quezadillas de jutiapa";

const RealizaCambio = cambio => {
    let newCambio = cambio.split(" ");
    let resultado = [ ];
    newCambio.forEach(palabras => {
        let primerLetra = palabras.charAt(0).toUpperCase();
        let restoOracion = palabras.slice(1, palabras.length);
        resultado.push(primerLetra + restoOracion);
    });
    console.log(resultado.join(" "));

    let html = '';
    resultado.forEach(prom => {

        html += ` ${ prom}`
    });
    const Contenedor1 = document.querySelector(`#principal1`);
    Contenedor1.innerHTML = html;
};
RealizaCambio(datos);