
/*let Num = [2,4,6];

function Cuadrado(Num){

    return Numero.map(n=>Math.pow(n,2))
}

console.log(Cuadrado[2,4,6]);*/

var NumeroArray1 = [2, 4, 6];
var Sqrt1 = NumeroArray1.map(num => {
    return Math.pow(num, 2);
});

var NumeroArray2 = [-3, 2, -8, 12, 5];
var Sqrt2 = NumeroArray2.map(num => {
    if (num === 5) {
        return num
    } else if (num > 0) {
        return Math.pow(num, 2);
    } else if (num === (-8)) {
        return Math.pow(num, 2);
    } else if (num < 0) {
        return num;
    }
});

var NumeroArray3 = [1, 2, 3, 4, 5];
var Sqrt3 = NumeroArray3.map(num => {
    if (num <= 2) {
        return Math.pow(num, 2);
    } else if (num <= 4 && num != 3) {
        return Math.pow(num, 2);
    }
    return num;

});
console.log(NumeroArray1);
console.log(Sqrt1);
console.log(NumeroArray2);
console.log(Sqrt2);
console.log(NumeroArray3);
console.log(Sqrt3);

let html = '';
NumeroArray1.forEach(prom => {

    html += `<ul > <li>${prom}</li></ul>`
}
);
const Contenedor1 = document.querySelector(`#num1`);
Contenedor1.innerHTML = html;


let html1 = '';
Sqrt1.forEach(prom => {

    html1 += `<ul > <li>${prom}</li></ul>`
}
);
const Contenedor11 = document.querySelector(`#pag1`);
Contenedor11.innerHTML = html1;



let html2 = '';
NumeroArray2.forEach(prom => {

    html2 += `<ul > <li>${prom}</li></ul>`
}
);
const Contenedor2 = document.querySelector(`#num2`);
Contenedor2.innerHTML = html2;


let html22 = '';
Sqrt2.forEach(prom => {

    html22 += `<ul > <li>${prom}</li></ul>`
}
);
const Contenedor22 = document.querySelector(`#pag2`);
Contenedor22.innerHTML = html22;




let html3 = '';
NumeroArray3.forEach(prom => {

    html3 += `<ul > <li>${prom}</li></ul>`
}
);
const Contenedor3 = document.querySelector(`#num3`);
Contenedor3.innerHTML = html3;


let html33 = '';
Sqrt3.forEach(prom => {

    html33 += `<ul > <li>${prom}</li></ul>`
}
);
const Contenedor33 = document.querySelector(`#pag3`);
Contenedor33.innerHTML = html33;




