//LOGIN//
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
  
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if (email === "paciente@paciente.cl" && password === "12345") {
            window.location.href = "inicio_paciente.html";
        } else if (email === "admin@admin.cl" && password === "12345") {
            window.location.href = "administrador.html";
        } else {
            alert("Contraseña incorrecta o dirección de correo no válida");
        }
    });
  });
  
  //VALIDACION DE CORREO Y PASSWORD//
  $(document).ready(function () {
    $("#login-form").validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          minlength: 5,
        },
      },
      messages: {
        email: {
          required: "Por favor ingrese su correo electrónico",
          email: "Por favor ingrese un correo electrónico válido",
        },
        password: {
          required: "Por favor ingrese su contraseña",
          minlength: "La contraseña debe tener al menos 5 caracteres",
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
  });