//OPERACIONES DE LA CALCULADORA
var resultado;
var numero1, numero2;
var selector = 0;

function mostrarRes(){mostrar.innerHTML = resultado;}

function limpiar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    selector = 0;
}

function sumar(){
    numero1 = document.getElementById("num1").value;
    numero2 = document.getElementById("num2").value;

    resultado = parseInt(numero1) + parseInt(numero2);

    mostrarRes();
    limpiar();
}

function restar(){
    numero1 = document.getElementById("num1").value;
    numero2 = document.getElementById("num2").value;

    resultado = parseInt(numero1) - parseInt(numero2);

    mostrarRes();
    limpiar();
}

function multiplicar(){
    numero1 = document.getElementById("num1").value;
    numero2 = document.getElementById("num2").value;

    resultado = parseInt(numero1) * parseInt(numero2);

    mostrarRes();
    limpiar();
}

function dividir(){
    numero1 = document.getElementById("num1").value;
    numero2 = document.getElementById("num2").value;

    resultado = parseInt(numero1) / parseInt(numero2);

    mostrarRes();
    limpiar();
}

function enterTecladoVirtual(){selector = 1;}

//signación de los numeros a los botones
function poner7(){
    if(selector == 0){document.getElementById("num1").value = document.getElementById("num1").value + "7";}
    if(selector == 1){document.getElementById("num2").value = document.getElementById("num2").value + "7";}
}

function poner8(){
    if(selector == 0){document.getElementById("num1").value = document.getElementById("num1").value + "8";}
    if(selector == 1){document.getElementById("num2").value = document.getElementById("num2").value + "8";}
}

function poner9(){
    if(selector == 0){document.getElementById("num1").value = document.getElementById("num1").value + "9";}
    if(selector == 1){document.getElementById("num2").value = document.getElementById("num2").value + "9";}
}

function poner4(){
    if(selector == 0){document.getElementById("num1").value = document.getElementById("num1").value + "4";}
    if(selector == 1){document.getElementById("num2").value = document.getElementById("num2").value + "4";}
}

function poner5(){
    if(selector == 0){document.getElementById("num1").value = document.getElementById("num1").value + "5";}
    if(selector == 1){document.getElementById("num2").value = document.getElementById("num2").value + "5";}
}

function poner6(){
    if(selector == 0){document.getElementById("num1").value = document.getElementById("num1").value + "6";}
    if(selector == 1){document.getElementById("num2").value = document.getElementById("num2").value + "6";}
}

function poner1(){
    if(selector == 0){document.getElementById("num1").value = document.getElementById("num1").value + "1";}
    if(selector == 1){document.getElementById("num2").value = document.getElementById("num2").value + "1";}
}

function poner2(){
    if(selector == 0){document.getElementById("num1").value = document.getElementById("num1").value + "2";}
    if(selector == 1){document.getElementById("num2").value = document.getElementById("num2").value + "2";}
}

function poner3(){
    if(selector == 0){document.getElementById("num1").value = document.getElementById("num1").value + "3";}
    if(selector == 1){document.getElementById("num2").value = document.getElementById("num2").value + "3";}
}

function poner0(){
    if(selector == 0){document.getElementById("num1").value = document.getElementById("num1").value + "0";}
    if(selector == 1){document.getElementById("num2").value = document.getElementById("num2").value + "0";}
}
