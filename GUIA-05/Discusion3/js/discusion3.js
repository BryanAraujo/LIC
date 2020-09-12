function init(){
        var temperatura = prompt('Digite la temperatura Celsius a convertir:');
        var farenheit;
        farenheit = (temperatura*1.8)+32;
        document.write("<center><h1>Calculo de temperaturas<br><br>");
        document.write("Conversion de Celsius a Farenheit: "+farenheit);
        document.write("°</center></h1>")
}
window.onload= init();