function insert(value) {
    let numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + value
}

function clean() {
    document.getElementById('resultado').innerHTML = ""
}

function back () {
    let value = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = value.substring(0, value.length -1)
}

function calcular () {
    let resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else {
        document.getElementById('resultado').innerHTML = "0"
    }
}