console.log("Sistema de registro para el usuario");
document.getElementById("varUser").style.display = "none";
document.getElementById("varemail").style.display = "none";
document.getElementById("varpass1").style.display = "none";
document.getElementById("varRpass").style.display = "none";



function validarRegister() {
    if (document.getElementById("form3Example1cg").value.length == 0 ) {
        document.getElementById("varUser").style.display = "inline";
        document.getElementById("form3Example1cg").classList.add("is-invalid");
    }else{
        document.getElementById("varUser").style.display = "none";
        document.getElementById("form3Example1cg").classList.remove("is-invalid");
        document.getElementById("form3Example1cg").classList.add("is-valid");   
    }

    if (document.getElementById("form3Example3cg").value.length == 0) {
        document.getElementById("varemail").style.display = "inline";
        document.getElementById("form3Example3cg").classList.add("is-invalid");
    }else{
        document.getElementById("varemail").style.display = "none";
        document.getElementById("form3Example3cg").classList.remove("is-invalid");
        document.getElementById("form3Example3cg").classList.add("is-valid");   

    }

    if (document.getElementById("form3Example4cg").value.length == 0) {
        document.getElementById("varpass1").style.display = "inline";
        document.getElementById("form3Example4cg").classList.add("is-invalid");
    }else{
        document.getElementById("varpass1").style.display = "none";
        document.getElementById("form3Example4cg").classList.remove("is-invalid");
        document.getElementById("form3Example4cg").classList.add("is-valid");   
    }


    if (document.getElementById("form3Example5cdg").value.length == 0) {
        document.getElementById("varRpass").style.display = "inline";
        document.getElementById("form3Example5cdg").classList.add("is-invalid");
    }else{
        document.getElementById("varRpass").style.display = "none";
        document.getElementById("form3Example5cdg").classList.remove("is-invalid");
        document.getElementById("form3Example5cdg").classList.add("is-valid");   
    }
}