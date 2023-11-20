//LOGIN//
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
  
    //Botón Iniciar Sesion
    $("#id_btnIniciarSesion").on("click", function () {
      if ($("#login-form").valid()) {
        // El formulario es válido, se puede enviar
        $("#login-form").submit();
      }
    });
});