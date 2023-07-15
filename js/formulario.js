const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^.{4,10}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    fecha: /^\d{4}-\d{2}-\d{2}$/,

}

const campos = {
    nombre: false,
    telefono: false,
    correo: false
}


function validarFormulario() {
    var telefono = document.getElementById("telefono").value;
    
    // Validar que el campo "telefono" tenga exactamente 10 dígitos
    if (telefono.length !== 10 || isNaN(telefono)) {
    alert("El teléfono debe tener 10 números.");
    return false;
    }
    
    // Validar que los demás campos no estén vacíos
    var nombre = document.getElementById("nombre").value;
    var noches = document.getElementById("noches").value;
    var habitacion = document.getElementById("habitacion").value;
    
    if (nombre === "" || noches === "" || habitacion === "") {
    alert("Por favor, complete todos los campos.");
    return false;
    }
    
    return true;
}
function validarFecha() {
    var fecha = document.getElementById("fecha").value;
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    
    if (!fecha.match(regex)) {
    alert("Por favor, ingresa una fecha válida en el formato AAAA-MM-DD.");
    return false;
    }
    
    return true;
}


inputs.forEach((input)=>{
    input.addEvenListener('keyup', validarFormulario);
    input.addEvenListener('blur',validarFormulario)
});


