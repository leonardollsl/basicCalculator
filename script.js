 function numberCalc(num){
    const numero = document.getElementById('calcResultado').innerHTML;
     document.getElementById('calcResultado').innerHTML = numero + num
 }
function cleanCalc(){
    document.getElementById('calcResultado').innerHTML = "";
}

function cleanNumber(){
    var results = document.getElementById('calcResultado').innerHTML;
    document.getElementById('calcResultado').innerHTML = results.substring(0, results.length -1);
}

function calc() {
    var results = document.getElementById('calcResultado').innerHTML;
    if (results){
        document.getElementById('calcResultado').innerHTML = eval(results);
    }
        else {
            document.getElementById('calcResultado').innerHTML = "..."
        }
}