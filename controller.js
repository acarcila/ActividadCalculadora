function calculate(){
    var select = document.getElementById("operation");
    var operation = select.options[select.selectedIndex].value;

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var elementResultado = document.getElementById("numResult");

    switch(operation)
    {
        case "sum":
            elementResultado.innerHTML = sum(num1, num2).toFixed(5);
            break;
        case "substraction":
            elementResultado.innerHTML = substraction(num1, num2).toFixed(5);
            break;
        case "multiplication":
            elementResultado.innerHTML = multipication(num1, num2).toFixed(5);
            break;
        case "division":
            elementResultado.innerHTML = division(num1, num2).toFixed(5);
            break;

        default:
            console.log("error");
    }
}

function sum(num1, num2){
    return num1 + num2;
}

function substraction(num1, num2){
    return num1 - num2;
}

function multipication(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}