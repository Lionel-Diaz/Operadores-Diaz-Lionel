
function validar_formulario(e){
    e.preventDefault()
    console.log("formulario enviado");
    console.log("nombre: " + input_nombre.value);
    console.log("apellido: " + input_apellido.value);
    console.log("email: " + input_email.value);
    console.log("mensaje: " + input_mensaje.value);
}
const input_nombre = document.querySelector('.nombre')
const input_email = document.querySelector('.email')
const input_apellido = document.querySelector('.apellido')
const input_mensaje = document.querySelector('.mensaje')
const botonEnviar = document.querySelector('.botonEnviar')

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", validar_formulario)
botonEnviar.addEventListener("click", validar_formulario)

input_nombre.addEventListener("input", () => {
    console.log(input_nombre.value);
})