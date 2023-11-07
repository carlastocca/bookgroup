////////////SIN FUNCION
// let ingresoNombre = prompt("Ingrese su Nombre");

// if(ingresoNombre === ""){
// alert("No ingresaste ningun nombre, por favor intentalo nuevamente");
// }
// else {
// alert("Bienvenido " + ingresoNombre);
// }

// let usuario = ingresoNombre;

//     do {
//         usuario = prompt("Ingresar tu Usuario");
//         if (usuario === "") {
//             alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
//         } else {
//             alert("Tu Usuario es " + usuario);

//             usuario = prompt("Ingresar tu email");
//             if (usuario === "") {
//                 alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
//             } else {
//                 alert("Tu email es " + usuario);

//                 usuario = prompt("Ingresa tu clave");
//                 if (usuario === "") {
//                     alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
//                 } else {
//                     alert("Ingresaste la clave con Éxito");
//                     break;
//                 }
//             }
//         }
//     } while (true);

/////////////CON FUNCION

function ingresarUsuario() {
  let ingresoNombre = prompt("Ingrese su Nombre");

  if (ingresoNombre === "") {
    alert("No ingresaste ningún nombre, por favor inténtalo nuevamente");
  } else {
    alert("Bienvenido " + ingresoNombre);
  }

  let usuario = ingresoNombre;

  do {
    usuario = prompt("Ingresar tu Usuario");
    if (usuario === "") {
      alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
    } else {
      alert("Tu Usuario es " + usuario);

      usuario = prompt("Ingresar tu email");
      if (usuario === "") {
        alert("No has ingresado ningún dato. Por favor, inténtalo nuevamente.");
      } else {
        alert("Tu email es " + usuario);

        usuario = prompt("Ingresa tu clave");
        if (usuario === "") {
          alert(
            "No has ingresado ningún dato. Por favor, inténtalo nuevamente."
          );
        } else {
          alert("Ingresaste la clave con éxito");
          alert("¡Acceso correcto!");
          break;
        }
      }
    }
  } while (true);
}

ingresarUsuario();
