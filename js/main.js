//producto

let productos = [
    {
        nombre: "televisor",
        precio: 120000
    },
    {
        nombre: "pava electrica",
        precio: 8000

    },
    {
        nombre: "microondas",
        precio: 35000
    },
    {
        nombre: "auriculares",
        precio: 12000
    }
];
let carrito = []

//añadir producto al carrito

producto1.onclick = () => {
    carrito.push(productos[0]);

    creandoElemento();
}
producto2.onclick = () => {
    carrito.push(productos[1]);
    creandoElemento();
}
producto3.onclick = () => {
    carrito.push(productos[2]);
    creandoElemento();
}
producto4.onclick = () => {
    carrito.push(productos[3]);
    creandoElemento();
}

let aca = document.getElementById("productos")





function creandoElemento() {  
     
    let lista = document.createElement("ul");
    let texto =[]
    carrito.forEach(producto => {  
        texto.push(`${producto.nombre} $ ${producto.precio}`);
    }
    )
    let productoAgregado = document.createTextNode(texto);
   
    let elementoLista = document.createElement("li");

    elementoLista.append(productoAgregado);
    

    lista.append(elementoLista);
    aca.append(lista);
}

total.onclick = () => {
    let dinero = [];
    carrito.forEach(precio => {
        dinero.push(precio.precio)
    });
    let valorInicial = 0;
    let sumaTotal = dinero.reduce((valorPrevio, valorVigente) => valorPrevio + valorVigente, valorInicial)

    let parrafo = document.createElement("p")
    let precioFinal = document.createTextNode(`El precio final es de $${sumaTotal} pesos.`)
    
    console.log(sumaTotal);
    parrafo.append(precioFinal)
    aca.append(parrafo)
}



