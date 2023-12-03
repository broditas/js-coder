
let carrito = 0;
let continuar;

const ZAPAS ={
    1: {precio: 100, stock: true},
    2: {precio: 200, stock: true},
    3: {precio: 300, stock: true},
    4: {precio: 1000000, stock: false},
    }


function sumaCarrito(){
do{
    let NUMERO = parseFloat(prompt("ingresa el codigo de producto:"));
    if(NUMERO == 1 || NUMERO == 2 || NUMERO == 3 || NUMERO == 4 && ZAPAS[NUMERO].stock == true){
        carrito += ZAPAS[NUMERO].precio;
        continuar = prompt("¿quiere agregar otro producto al carrito?(si/no)").toLowerCase();
    }
    else if (ZAPAS[NUMERO].stock == false){
        alert("este producto no esta en stock");
        continuar = prompt("¿quiere agregar otro producto al carrito?(si/no)").toLowerCase();
    }
    else{
        alert("ingresa un codigo valido");
        continuar ="si";
    }
} while( continuar === "si");
alert("el valor total de carrito es: " + carrito);
}

sumaCarrito()

