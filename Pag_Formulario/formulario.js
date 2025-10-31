const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario .campos')

const expresiones = {
nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
telefono: /^\d{7,14}$/,
mensaje: /^[\s\S]{20,500}$/
}

const campos={
    nombre: false,
    correo: false,
    telefono: false,
    mensaje: false
}

const validarForm = (e) => {
switch (e.target.name){
    case "Nombre":
        if (expresiones.nombre.test(e.target.value)){
document.getElementById('nombre').classList.remove('formulario-grupo-incorrecto');
document.getElementById('nombre').classList.add('formulario-grupo-correcto');
document.querySelector('#nombre i').classList.add('fa-circle-check');
document.querySelector('#nombre i').classList.remove('fa-circle-xmark');
document.querySelector('#nombre .formulario_error').classList.remove('formulario_error-activo');
campos['nombre'] = true;
        }   else{
            document.getElementById('nombre').classList.add('formulario-grupo-incorrecto');
            document.getElementById('nombre').classList.remove('formulario-grupo-correcto');
            document.querySelector('#nombre i').classList.remove('fa-circle-check');
            document.querySelector('#nombre i').classList.add('fa-circle-xmark');
            document.querySelector('#nombre .formulario_error').classList.add('formulario_error-activo');
            campos['nombre'] = false;
        } 
break;
    case "Email":
    if (expresiones.correo.test(e.target.value)){
document.getElementById('email').classList.remove('formulario-grupo-incorrecto');
document.getElementById('email').classList.add('formulario-grupo-correcto');
document.querySelector('#email i').classList.add('fa-circle-check');
document.querySelector('#email i').classList.remove('fa-circle-xmark');
document.querySelector('#email .formulario_error').classList.remove('formulario_error-activo');
campos['correo'] = true;
        }   else{
            document.getElementById('email').classList.add('formulario-grupo-incorrecto');
            document.getElementById('email').classList.remove('formulario-grupo-correcto');
            document.querySelector('#email i').classList.remove('fa-circle-check');
            document.querySelector('#email i').classList.add('fa-circle-xmark');
            document.querySelector('#email .formulario_error').classList.add('formulario_error-activo');
            campos['correo']= false;
        } 
    break;
    case "Tel":
    if (expresiones.telefono.test(e.target.value)){
document.getElementById('numero').classList.remove('formulario-grupo-incorrecto');
document.getElementById('numero').classList.add('formulario-grupo-correcto');
document.querySelector('#numero i').classList.add('fa-circle-check');
document.querySelector('#numero i').classList.remove('fa-circle-xmark');
document.querySelector('#numero .formulario_error').classList.remove('formulario_error-activo');
campos['telefono'] = true;

        }   else{
            document.getElementById('numero').classList.add('formulario-grupo-incorrecto');
            document.getElementById('numero').classList.remove('formulario-grupo-correcto');
            document.querySelector('#numero i').classList.remove('fa-circle-check');
            document.querySelector('#numero i').classList.add('fa-circle-xmark');
            document.querySelector('#numero .formulario_error').classList.add('formulario_error-activo');
        campos['telefono'] = false;
        } 
    break;
    case "Mensaje":
        if (expresiones.mensaje.test(e.target.value)){
document.getElementById('mensaje').classList.remove('formulario-grupo-incorrecto');
document.getElementById('mensaje').classList.add('formulario-grupo-correcto');
document.querySelector('#mensaje i').classList.add('fa-circle-check');
document.querySelector('#mensaje i').classList.remove('fa-circle-xmark');
document.querySelector('#mensaje .formulario_error').classList.remove('formulario_error-activo');
campos['mensaje'] = true;

        }   else{
            document.getElementById('mensaje').classList.add('formulario-grupo-incorrecto');
            document.getElementById('mensaje').classList.remove('formulario-grupo-correcto');
            document.querySelector('#mensaje i').classList.remove('fa-circle-check');
            document.querySelector('#mensaje i').classList.add('fa-circle-xmark');
            document.querySelector('#mensaje .formulario_error').classList.add('formulario_error-activo');
        campos['mensaje'] = false;
        } 
    break;
}
}
inputs.forEach((input) => {
input.addEventListener('keyup',validarForm);
input.addEventListener('blur',validarForm);
})


formulario.addEventListener('submit', (e)  => {
e.preventDefault();

if(campos.nombre && campos.correo && campos.telefono && campos.mensaje){
formulario.reset();


document.getElementById('mensaje_exito').classList.add('formulario-mensaje-exito-activo');
setTimeout(()=>{
document.getElementById('mensaje_exito').classList.remove('formulario-mensaje-exito-activo');
}, 5000);

document.querySelectorAll('.formulario-grupo-correcto').forEach((icono) => {
icono.classList.remove('formulario-grupo-correcto');
});

}else{
document.getElementById('mensaje_error').classList.add('formulario-mensaje-activo');
setTimeout(()=>{
document.getElementById('mensaje_error').classList.remove('formulario-mensaje-activo');
}, 5000);

}

})

