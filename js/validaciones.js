export function validar(input) {
    const tipoDeInput = input.dataset.tipo;
   
    if (input.validity.valid) {  //Comparo para cambiar clase css--- error de dato ingresado
      input.parentElement.classList.remove("input-contact--invalido");
      input.parentElement.querySelector(".input-mensaje-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-contact--invalido");
      input.parentElement.querySelector(".input-mensaje-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
  }

  const tipoErrores = [
      'valueMissing',
      'typeMismatch'
  ]

  const mensajeError = {
    nombre:  {
        valueMissing:"Ingrese su nombre",
      },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
      },
    }

  
function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajeError[tipoDeInput][error]);
        mensaje = mensajeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
  