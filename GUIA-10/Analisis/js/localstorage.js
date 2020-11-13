function init(){
    setInterval(() => {
        var name = document.getElementById('nombre').value;
        var select = document.getElementById('pais').value;
        var text = document.getElementById('comment').value;
        localStorage.setItem("nombre", name);
        localStorage.setItem("pais", select);
        localStorage.setItem("Biografia", text);
    }, 10000);
}
function registrar() {

    var name = document.getElementById('nombre').value;
    var select = document.getElementById('pais').value;
    var text = document.getElementById('comment').value;
    localStorage.setItem("nombre", name);
    localStorage.setItem("pais", select);
    localStorage.setItem("Biografia", text);
    alert('Guardado');
    var name = document.getElementById('nombre').value = "";
    var text = document.getElementById('comment').value = "";
}
function borrar() {
    localStorage.clear();
    alert("LocalStorage Limpio")
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", init);
}