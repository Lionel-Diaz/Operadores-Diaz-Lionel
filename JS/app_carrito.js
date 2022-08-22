
const Marroc = document.querySelector('.botonMarroc')
const Chocolate = document.querySelector('.botonChocolate')
const Frutilla = document.querySelector('.botonFrutilla')
const Mani = document.querySelector('.botonMani')
const Vainilla = document.querySelector('.botonVainilla')
const Coco = document.querySelector('.botonCoco')

const productosAgregados = []


Marroc.addEventListener("click", () =>{
    productosAgregados.push("barritaMarroc")
    localStorage.setItem("agregarMarroc", JSON.stringify(productosAgregados))
    console.log(productosAgregados);
})
Chocolate.addEventListener("click", () =>{
    productosAgregados.push("barritaChocolate")
    localStorage.setItem("agregarChocolate", JSON.stringify(productosAgregados))
    console.log(productosAgregados);
})
Frutilla.addEventListener("click", () =>{
    productosAgregados.push("barritaFrutilla")
    localStorage.setItem("agregarFrutilla", JSON.stringify(productosAgregados))
    console.log(productosAgregados);
})
Mani.addEventListener("click", () =>{
    productosAgregados.push("barritaMani")
    localStorage.setItem("agregarMani", JSON.stringify(productosAgregados))
    console.log(productosAgregados);
})
Vainilla.addEventListener("click", () =>{
    productosAgregados.push("barritaVainilla")
    localStorage.setItem("agregarVainilla", JSON.stringify(productosAgregados))
    console.log(productosAgregados);
})
Coco.addEventListener("click", () =>{
    productosAgregados.push("barritaCoco")
    localStorage.setItem("agregarCoco", JSON.stringify(productosAgregados))
    console.log(productosAgregados);
})

const carritoGuardado = JSON.parse(localStorage.getItem(productosAgregados))
