const productos = [{ categoria: "Lacteos", precio: 55, }, { categoria: "Embutidos", precio: 22, },
{ categoria: "Snacks", precio: 65, }, { categoria: "Pastas", precio: 35, }];

let pre = productos.filter((prod) => {
    return prod.categoria == "Lacteos";
    return prod.categoria == "Embutidos";
    return prod.categoria == "Snacks";
    return prod.categoria == "Pastas";
});

console.log(pre);
const cate = productos.find((prod) => {
    return prod.categoria == "Lacteos";
    return prod.categoria == "Embutidos";
    return prod.categoria == "Snacks";
    return prod.categoria == "Pastas";
});
console.log(cate);
let total = productos.reduce((precioTotal, prod) => {
    if (prod.categoria === "Lacteos")
        return precioTotal + prod.precio;
    if (prod.categoria === "Embutidos")
        return precioTotal + prod.precio;
    if (prod.categoria === "Snakcs")
        return precioTotal + prod.precio;
    if (prod.categoria === "Pastas")
        return 0;
    else
        return precioTotal;
},
0);

console.log(`El total de la categoria ${cate.categoria} es: ${total}`);

let contenedor = document.querySelector (`#principal`);

let html = ` `;

contenedor.innerHTML=html;
