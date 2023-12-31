//Función validación Login

const usuarioCorrecto = 'user@user.com';
const contrasenaCorrecta = '123456';

function iniciarSesion() {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    if (usuario === usuarioCorrecto && password === contrasenaCorrecta) {
        // Redirigir a la página en caso de acceso correcto
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

function showForm() {
    let formPrincipal = document.getElementById('principal__principal-formulario');
    formPrincipal.style.display = 'flex';
}

function hideButton() {
    let botonNuevoIngreso = document.getElementById('btnNuevoIngreso');
    botonNuevoIngreso.style.visibility = 'hidden'
}

// Función click Cancelar Ingreso

function cancelarIngreso(event) {
    event.preventDefault();
    let formPrincipal = document.getElementById('principal__principal-formulario');
    formPrincipal.style.display = 'none';
}

function showButton() {
    let botonNuevoIngreso = document.getElementById('btnNuevoIngreso');
    botonNuevoIngreso.style.visibility = 'visible'
}

// Función Ingreso Exitoso

function registrarDato() {
    const valorMedicion = document.getElementById("principal__principal-valor").value;
    const fechaMedicion = document.getElementById("principal__principal-fecha").value;

    if(valorMedicion === '' && fechaMedicion === '') {
        alert("Por favor ingresar los datos requeridos.");
    } else {
        alert("Registramos correctamente los datos ingresados.");
    }
}

