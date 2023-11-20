//MENU TIPO NAVBAR//
$(document).ready(function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("menu-superior").outerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "navbar.html", true);
  xhttp.send();
});

//FOOTER//
$(document).ready(function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("footer").outerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "footer.html", true);
  xhttp.send();
});

//METODO DE RUT CHILENO//
$.validator.addMethod(
  "rutChileno",
  function (value, element) {
    // Eliminar puntos y guión del RUT
    value = value.replace(/[.-]/g, "");
    // Validar que el RUT tenga 8 o 9 dígitos
    if (value.length < 8 || value.length > 9) {
      return false;
    }

    // Validar que el último dígito sea un número o una 'K'
    var validChars = "0123456789K";
    var lastChar = value.charAt(value.length - 1).toUpperCase();
    if (validChars.indexOf(lastChar) == -1) {
      return false;
    }

    // Calcular el dígito verificador
    var rut = parseInt(value.slice(0, -1), 10);
    var factor = 2;
    var sum = 0;
    var digit;
    while (rut > 0) {
      digit = rut % 10;
      sum += digit * factor;
      rut = Math.floor(rut / 10);
      factor = factor === 7 ? 2 : factor + 1;
    }
    var dv = 11 - (sum % 11);
    dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();

    // Validar que el dígito verificador sea correcto
    return dv === lastChar;
  },
  "Por favor ingrese un RUT válido."
);

//REGISTRO//
$(document).ready(function () {
  $("#sign-up-form").validate({
    rules: {
      rut: {
        required: true,
        rutChileno: true,
      },
      nombre: {
        required: true,
      },
      apellido: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      direccion: {
        required: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
      password2: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      rut: {
        required: "Por favor ingrese su RUT",
        rutChileno: "Por favor ingrese un RUT válido",
      },
      nombre: {
        required: "Por favor ingrese su nombre",
      },
      apellido: {
        required: "Por favor ingrese su apellido",
      },
      email: {
        required: "Por favor ingrese su correo electrónico",
        email: "Por favor ingrese un correo electrónico válido",
      },
      password: {
        required: "Por favor ingrese su contraseña",
        minlength: "La contraseña debe tener al menos 5 caracteres",
      },
      password2: {
        required: "Por favor repita su contraseña",
        equalTo: "Las contraseñas no coinciden",
      },
    },
    errorElement: "div",
    errorPlacement: function (error, element) {
      error.addClass("invalid-feedback");
      element.closest(".form-group").append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element)
        .addClass(errorClass)
        .removeClass(validClass)
        .closest(".form-group")
        .addClass("has-error");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element)
        .removeClass(errorClass)
        .addClass(validClass)
        .closest(".form-group")
        .removeClass("has-error");
    },
  });

  //Botón Guardar
  $("#id_btnGuardar").on("click", function () {
    if ($("#sign-up-form").valid()) {
      // El formulario es válido, se puede enviar
      $("#sign-up-form").submit();
    }
  });

  //Boton Limpiar
  $("#id_btnLimpiar").click(function() {
    $("#sign-up-form").reset();
  });
});