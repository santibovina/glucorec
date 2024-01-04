//Función validación Login

const usuarioCorrecto = 'user@user.com';
const contrasenaCorrecta = 'pass123';

function iniciarSesion() {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    if (usuario === usuarioCorrecto && password === contrasenaCorrecta) {
        // Redirigir a LA PAGINA INDEX O A DONDE LO QUIERAS MANDAR
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos!');
    }
}

// Función Alert Recuperar Contraseña

function mailEnviado() {
    alert("Te enviamos un mail con la nueva contraseña!\nPor favor revisa tu bandeja de entrada o spam.");
}

// Función click Nuevo Ingreso

function mostrarNuevoIngresoBtn() {
    let formShow = document.getElementById('principal__principal-formulario');
    formShow.style.visibility = 'visible';
}

function cancelarIngreso() {
    let formHide = document.getElementById('principal__principal-formulario');
    formHide.style.visibility = 'hidden';
}
