const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
telefono: /^\d{7,14}$/
}
const validarForm = (e) => {
switch (e.target.name){
    case "Nombre":
        if (expresiones.nombre.test(e.target.value)){
document.getElementById('nombre').classList.remove('formulario-grupo-incorrecto');
document.getElementById('nombre').classList.add('formulario-grupo-correcto');
document.querySelector('#nombre i').classList.add('fa-circle-check');
document.querySelector('#nombre i').classList.remove('fa-circle-xmark');

        }   else{
            document.getElementById('nombre').classList.add('formulario-grupo-incorrecto');
            document.getElementById('nombre').classList.remove('formulario-grupo-correcto');
            document.querySelector('#nombre i').classList.remove('fa-circle-check');
document.querySelector('#nombre i').classList.add('fa-circle-xmark');
        } 
break;
    case "Email":
    
    break;
    case "Tel":
    
    break;
}
}
inputs.forEach((input) => {
input.addEventListener('keyup',validarForm);
input.addEventListener('blur',validarForm);
})


formulario.addEventListener('submit', (e)  => {
e.preventDefault();
})