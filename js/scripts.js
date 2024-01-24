//Función validación Login

const usuarioCorrecto = 'user@user.com';
const contrasenaCorrecta = '123456';

function iniciarSesion() {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    if (usuario === usuarioCorrecto && password === contrasenaCorrecta) {
        // Redirigir a la página en caso de acceso correcto
        window.location.href = 'logged.html';
    } else {
        alert('Usuario o contraseña incorrectos!');
    }
}

// Función Alert Recuperar Contraseña

function mailEnviado() {
    const mailUsuario = document.getElementById('email').value;
    console.log(document.getElementById('email').value)
    if (mailUsuario === '') {
        alert("Por favor, ingresa una dirección de email válida.");
    } else {
        alert("Te enviamos un mail con la nueva contraseña!\nPor favor, revisa tu bandeja de entrada o spam.");
        window.location.href = 'index.html';
    }
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

    if(valorMedicion === '' || fechaMedicion === '') {
        alert("Por favor, ingresa los datos requeridos.");
    } else {
        var params = new URLSearchParams(window.location.search);
        var usuario = params.get('nombreUsuario');
        window.location.href = 'logged.html?nombreUsuario=' + encodeURIComponent(usuario);
        alert("Registramos correctamente los datos ingresados.");
    }
}

// Validación registro nuevo usuario

function registroNuevoUsuario() {
    const pass1 = document.getElementById("passwordRegistro").value;
    const pass2 = document.getElementById("passwordRegistro2").value;
    const fechaNac = document.getElementById("nacimiento").value;

    if(pass1 === '' || pass2 === '' || fechaNac === '') {
        alert("Por favor, completa todos los campos del formulario");

    } else {

        document.getElementById('formulario__registro-form').addEventListener('submit', function(event) {
            event.preventDefault();
        
            var usuario = document.getElementById('nombreUsuario').value;
        
            window.location.href = 'logged.html?nombreUsuario=' + encodeURIComponent(usuario);

            alert("Gracias por registrarte!");
        });
    }
}

// Función mostrar nombre de usuario

function obtenerNombre() {
    var params = new URLSearchParams(window.location.search);
    var usuario = params.get('nombreUsuario');
    return usuario || '';
}

function mostrarNombre() {
    var nombreUsuario = obtenerNombre();
    console.log(nombreUsuario);
    var usuarioRegistrado = document.getElementById('usuarioRegistrado');

    if (nombreUsuario) {
        usuarioRegistrado.textContent = 'Hola ' + nombreUsuario + '!';
    } else {
        usuarioRegistrado.textContent = 'Bienvenido';
    }
}
mostrarNombre();