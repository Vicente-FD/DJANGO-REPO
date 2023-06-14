function login() {
    var user = document.getElementById("form3Example1cg").value;
    var pass = document.getElementById("form3Example4cg").value;
    if (user == "admin@email.com" && pass == "admin123") {
        alert("Bienvenido!");
        window.location = "admin.html";
    }else if(user == "user@email.com" && pass == "user1234"){
        alert("Bienvenido!");
        window.location = "indexSignup.html";
    } 
    else {
        alert("Los datos ingresados son incorrectos");
    }
}