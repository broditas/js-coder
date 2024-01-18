
let carrito = [];
let continuar;

const ZAPAS =[
    {id:1, precio:100, nombre:sapa1},
    {id:2, precio:200, nombre:sapa2},
    {id:3, precio:300, nombre:sapa3},
    {id:4, precio:100, nombre:sapa4}
    ]

//creacion de las cards

function renderizarProductos(){
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';

    PRODUCTOS.forEach( producto =>{
        const card = document.createElement('div');
        card.classLints.add('card');
        card.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>precio: $${producto.precio.toFixed(2)} </p>
                    <button onclick ="agregarAlCarrito(${producto.id})">agregar carrito</button>
    `;
    carritoElement.appendChild(card);
    })
}

//funcion para agregar un producto al carrito

function agregarAlCarrito(idProducto){
    const productoSeleccionado = ZAPAS.find(producto => producto.id ===idProducto);

    if(productoSeleccionado){
        carrito.push(productoSeleccionado);
        actualizarCarrito();
    }
}


//funcion para actalizar y visualizar carrito


function actualizarCarrito(){
    const carritoElement = document.getElementById('total')
    carritoElement.innerHTML = '';
    carrito.forEach(producto =>{
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>precio: $${producto.precio.toFixed(2)} </p>
                    `;
        carritoElement(card);
    })
    sumarTotal()
}

function sumarTotal(){
    const totalElement = document.getElementById('final');
    const total = carrito.reduce((acc, producto) => acc+ producto.precio,0)
    totalElement.innerHTML = `<p> total: $${total}`;
}
renderizarProductos()






//version antigua de preentrega


// function sumaCarrito(){
// do{
//     let NUMERO = parseFloat(prompt("ingresa el codigo de producto:"));
//     if(NUMERO == 1 || NUMERO == 2 || NUMERO == 3 || NUMERO == 4 && ZAPAS[NUMERO].stock == true){
//         carrito += ZAPAS[NUMERO].precio;
//         continuar = prompt("¿quiere agregar otro producto al carrito?(si/no)").toLowerCase();
//     }
//     else if (ZAPAS[NUMERO].stock == false){
//         alert("este producto no esta en stock");
//         continuar = prompt("¿quiere agregar otro producto al carrito?(si/no)").toLowerCase();
//     }
//     else{
//         alert("ingresa un codigo valido");
//         continuar ="si";
//     }
// } while( continuar === "si");
// alert("el valor total de carrito es: " + carrito);
// }

// sumaCarrito()

