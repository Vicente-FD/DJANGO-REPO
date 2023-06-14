$(function(){
    $("#loginForm").validate({
        rules: {
            form3Example1cg: {
                required: true,
                email: true
            },
            form3Example4cg: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            form3Example1cg: {
                required: "El email es obligatorio",
                email: "El email ingresado no es válido"
            },
            form3Example4cg: {
                required: "La contraseña es obligatoria",
                minlength: "La contraseña tiene un minimo de 8 caracteres"
            }
        }
    })
})