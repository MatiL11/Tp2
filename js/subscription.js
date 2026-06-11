function validarNombre(v) {
  if (v.trim().length <= 6) return "Debe tener más de 6 caracteres.";
  if (!v.trim().includes(" ")) return "Debe tener al menos un espacio.";
  return "";
}

function validarEmail(v) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Ingresá un email válido.";
  return "";
}

function validarContrasena(v) {
  if (v.length < 8) return "Mínimo 8 caracteres.";
  if (!/[a-zA-Z]/.test(v) || !/[0-9]/.test(v)) return "Debe tener letras y números.";
  return "";
}

function validarRepetir(v) {
  if (v !== document.getElementById("contrasena").value) return "Las contraseñas no coinciden.";
  return "";
}

function validarEdad(v) {
  if (!/^\d+$/.test(v) || parseInt(v) < 18) return "Debe ser un número entero mayor o igual a 18.";
  return "";
}

function validarTelefono(v) {
  if (!/^\d{7,}$/.test(v)) return "Al menos 7 dígitos, sin espacios ni guiones.";
  return "";
}

function validarDireccion(v) {
  if (v.trim().length < 5 || !v.trim().includes(" ")) return "Al menos 5 caracteres con un espacio.";
  return "";
}

function validarCiudad(v) {
  if (v.trim().length < 3) return "Al menos 3 caracteres.";
  return "";
}

function validarCodigoPostal(v) {
  if (v.trim().length < 3) return "Al menos 3 caracteres.";
  return "";
}

function validarDNI(v) {
  if (!/^\d{7,8}$/.test(v)) return "Debe tener 7 u 8 dígitos.";
  return "";
}

var campos = [
  { id: "nombre",       validar: validarNombre },
  { id: "email",        validar: validarEmail },
  { id: "contrasena",   validar: validarContrasena },
  { id: "repetir",      validar: validarRepetir },
  { id: "edad",         validar: validarEdad },
  { id: "telefono",     validar: validarTelefono },
  { id: "direccion",    validar: validarDireccion },
  { id: "ciudad",       validar: validarCiudad },
  { id: "codigoPostal", validar: validarCodigoPostal },
  { id: "dni",          validar: validarDNI }
];

function mostrarError(id, mensaje) {
  var input = document.getElementById(id);
  var errorEl = document.getElementById("error-" + id);
  var label = document.querySelector("label[for='" + id + "']");

  errorEl.textContent = mensaje;

  if (mensaje) {
    input.classList.add("invalido");
    input.classList.remove("valido");
    label.classList.add("invalido");
  } else {
    input.classList.remove("invalido");
    input.classList.add("valido");
    label.classList.remove("invalido");
  }
}

function ocultarError(id) {
  var input = document.getElementById(id);
  var errorEl = document.getElementById("error-" + id);
  var label = document.querySelector("label[for='" + id + "']");

  errorEl.textContent = "";
  input.classList.remove("invalido");
  label.classList.remove("invalido");
}

campos.forEach(function(campo) {
  var input = document.getElementById(campo.id);

  input.addEventListener("blur", function() {
    mostrarError(campo.id, campo.validar(input.value));
  });

  input.addEventListener("focus", function() {
    ocultarError(campo.id);
  });
});

document.getElementById("form-suscripcion").addEventListener("submit", function(e) {
  e.preventDefault();

  var errores = [];

  campos.forEach(function(campo) {
    var input = document.getElementById(campo.id);
    var error = campo.validar(input.value);
    mostrarError(campo.id, error);
    if (error) errores.push(error);
  });

  var modalContenido = document.getElementById("modal-contenido");
  modalContenido.innerHTML = "";

  if (errores.length > 0) {
    modalContenido.innerHTML = "<h3>Hay errores en el formulario:</h3>";
    errores.forEach(function(err) {
      var p = document.createElement("p");
      p.className = "error";
      p.textContent = "• " + err;
      modalContenido.appendChild(p);
    });
  } else {
    modalContenido.innerHTML = "<h3>Datos ingresados:</h3>";
    var etiquetas = {
      nombre: "Nombre completo",
      email: "Email",
      contrasena: "Contraseña",
      repetir: "Repetir contraseña",
      edad: "Edad",
      telefono: "Teléfono",
      direccion: "Dirección",
      ciudad: "Ciudad",
      codigoPostal: "Código postal",
      dni: "DNI"
    };
    campos.forEach(function(campo) {
      var valor = document.getElementById(campo.id).value;
      if (campo.id === "contrasena" || campo.id === "repetir") valor = "••••••••";
      var p = document.createElement("p");
      p.textContent = etiquetas[campo.id] + ": " + valor;
      modalContenido.appendChild(p);
    });
  }

  document.getElementById("modal").classList.add("visible");
});

document.getElementById("modal-cerrar").addEventListener("click", function() {
  document.getElementById("modal").classList.remove("visible");
});

var inputNombre = document.getElementById("nombre");
var tituloSaludo = document.getElementById("titulo-saludo");

inputNombre.addEventListener("keydown", function() {
  setTimeout(function() {
    var nombre = inputNombre.value.trim().toUpperCase();
    tituloSaludo.textContent = nombre ? "HOLA " + nombre : "HOLA";
  }, 0);
});

inputNombre.addEventListener("focus", function() {
  var nombre = inputNombre.value.trim().toUpperCase();
  tituloSaludo.textContent = nombre ? "HOLA " + nombre : "HOLA";
});
