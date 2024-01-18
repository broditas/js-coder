
const PRODUCTOS = [

    {id:1, nombre: 'dunk', precio:150, imagen:`./assets/dunk.jpeg`},
    {id:2, nombre: 'jordan', precio:425, imagen:`./assets/jordan.jpg`},
    {id:3, nombre:'yeezy', precio:500, imagen:`./assets/yeezy.jpg`}
];

const carrito = [];

//creacion de las cards

function renderizarProductos(){
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';

    PRODUCTOS.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>precio: $${producto.precio.toFixed(2)} </p>
                    <img src="${producto.imagen}" alt="">
                    <button onclick ="agregarAlCarrito(${producto.id})">agregar carrito</button>
        `;
        carritoElement.appendChild(card);
    })

}


//funcion para agregar un producto al carrito

function agregarAlCarrito(idProducto){
    const productosSeleccionado = PRODUCTOS.find(producto => producto.id === idProducto);

    if(productosSeleccionado){
        carrito.push(productosSeleccionado);
        actualizarCarrito();
    }
}

//funcion para actualizar y visualizar carrito

function actualizarCarrito(){
    const carritoElement = document.getElementById('total');
    carritoElement.innerHTML = '';
    carrito.forEach(producto =>{
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>precio: ${producto.precio.toFixed(2)} </p>
            
        `;
        carritoElement.appendChild(card);

    })
    sumarTotal()
}


function sumarTotal(){
    const totalElement = document.getElementById('final');
    const total = carrito.reduce((acc, producto) => acc+ producto.precio,0 )
    totalElement.innerHTML = `<p> total: $${total}`;
}
renderizarProductos();

