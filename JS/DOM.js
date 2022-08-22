
/* Creamos clase costructora de los produtos */
class Producto{
    constructor(nombre, tipo, sabor, precio, stock, foto){
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo.toUpperCase();
        this.sabor = sabor.toUpperCase();
        this.precio = precio;
        this.stock = stock;
        this.foto = foto;
    }

}


/* Asignamos valores a los objetos */
const producto1 = new Producto("barrita Olympic","energetica", "frutilla", 120, "disponible", "../multimedia/barrita--frutilla.jpg");
const producto2 = new Producto("barrita Olympic","energetica", "chocolate", 120,"disponible", "../multimedia/barrita--chocolate.jpg");
const producto3 = new Producto("barrita Olympic","energetica", "vainilla", 120,"disponible", "../multimedia/barrita--vainilla.jpg");
const producto4 = new Producto("barrita Olympic","energetica", "coco", 120,"no disponible", "../multimedia/barrita--coco.jpg");
const producto5 = new Producto("barrita Olympic","energetica", "mani", 120,"no disponible", "../multimedia/barrita--mani.jpg");
const producto6 = new Producto("barrita Olympic","energetica", "marroc", 120,"disponible", "../multimedia/barrita--marroc.jpg");

/* Creamos array de los productos*/
const productos=[producto1, producto2, producto3, producto4, producto5, producto6];



/* Aplicando DOM */

/* Agregando subtitulos */

let contenedor = document.getElementsByClassName("DOM")
let parrafo = document.createElement("p")

parrafo.innerHTML = `<h2 >Agregando un h2 desde JS</h2>`

console.log(contenedor);
document.body.append(parrafo)



/* Agregando lista */
let personas = ["HOMERO","MARGE","BART","LISA","MAGGIE"];

for(const persona of personas){
    let li = document.createElement("li");
    li.innerHTML = persona
    document.body.appendChild(li);
}



/* Agregando productos */
productos.forEach((producto) => {

    const nuevoDiv = document.createElement('div')
    nuevoDiv.innerHTML = `
    <div class="col-12 col-md-6 p-3 carta--1">
        <div class="card carta mx-auto border border-4 border-dark">
        <img class="card-img-bottom img-barritas-un mx-auto " src="${producto.foto}" alt="barrita energetica de marroc">
        <div class="card-body">
        <h4 class="card-title"> ${producto.sabor}</h4>
        </div>
        </div>
    </div>
    `
    console.log(nuevoDiv);
    document.body.append(nuevoDiv)
})
