//OPERACIONES DE LA CALCULADORA
var resultado;

function mostrarRes(){
    mostrar.innerHTML = resultado;
}

function limpiar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function sumar(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    console.log(num1 + num2);
    resultado = num1 + num2;

    mostrarRes();
    limpiar();
}
