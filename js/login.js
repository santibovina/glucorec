const usuarioCorrecto = 'usuario';
const contrasenaCorrecta = 'pass123';

function iniciarSesion() {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    if (usuario === usuarioCorrecto && password === contrasenaCorrecta) {
        // Redirigir a LA PAGINA INDEX O A DONDE LO QUIERAS MANDAR
        window.location.href = 'https://www.google.com';
    } else {
        alert('Usuario o contraseña incorrectos!');
    }
}