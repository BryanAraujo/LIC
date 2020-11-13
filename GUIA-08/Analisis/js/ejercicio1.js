function iniciar() {
    var btnresul = document.getElementById("resul");
    if (btnresul.addEventListener) {
        btnresul.addEventListener("click", resultadok, false);
    }
    else {
        btnresul.attachEvent("onclick", resultadok);
    }
}

function resultadok() {
    var rect = new resultado(document.frmresultado.base.value, document.frmresultado.potencia.value);
    rect.mostrar(rect.resu(), 'resultado');
    return false;
}

function resultado(base, potencia) {
    this.base = parseFloat(base);
    this.potencia = parseFloat(potencia);
    this.resu = new Function("return Math.pow(this.base, this.potencia)");
    this.mostrar = new Function("valor", "tipoc", "document.getElementById('respuesta').innerHTML='El resultado es: '+ valor");
}
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}