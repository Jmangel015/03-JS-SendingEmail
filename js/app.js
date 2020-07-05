//variable
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');

const reset = document.getElementById('resetBtn');

// Even Listeners
eventListeners();

function eventListeners() {
  //inicio de la aplicacion y deshabilitar submit
  document.addEventListener('DOMContentLoaded', inicioApp);
  email.addEventListener('blur', validarCampo);
  asunto.addEventListener('blur', validarCampo);
  mensaje.addEventListener('blur', validarCampo);

  //boton de enviar en el submit
  formularioEnviar.addEventListener('submit', enviarEmail);
  reset.addEventListener('click', resetFormulario);
}

//Function

function inicioApp() {
  // deshabilitar el envio
  btnEnviar.disabled = true;
}

function validarCampo() {
  //se  valida la longitud del texto y que no esté vacio
  validarLongitud(this);
  //Validar solo emial
  if (this.type === 'email') {
    validarEmail(this);
  }
  let errores = document.querySelectorAll('.error');
  if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }
}

function enviarEmail(e) {
  e.preventDefault();
  const spinnerGif = document.querySelector('#spinner');
  spinnerGif.style.display = 'block';

  // gif que enia Email
  const enviado = document.createElement('img');
  enviado.src = 'img/mail.gif';
  enviado.style.display = 'block';

  // ocultar spinner

  setTimeout(function () {
    spinnerGif.style.display = 'none';
    document.querySelector('#loaders').appendChild(enviado);
    setTimeout(function () {
      enviado.remove();
      formularioEnviar.reset();
    }, 3000);
  }, 2000);
}

function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}

function validarEmail(campo) {
  const mensaje = campo.value;
  if (mensaje.indexOf('@') !== -1) {
    campo.style.borderBottomColor = 'green';
    campo.classList.remove('error');
  } else {
    campo.style.borderBottomColor = 'red';
    campo.classList.add('error');
  }
}

// resetea el formulario
function resetFormulario(e) {
  e.preventDefault();
  formularioEnviar.reset();
}
