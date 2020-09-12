function init(){
    var metros = prompt('Digite los metros a convertir: ');
    var pulgadas;
    pulgadas = metros*39.3701;
    document.write("<center>");
    document.write("<div class='contenido'><div class='hijo'>");
    document.write("<h1 class='tema'>Conversiones</h1><h1>Metros ingresados: "+metros+" metros");
    document.write("<br>Conversion a yardas: "+pulgadas+" pulgadas</h1>");
    document.write("<a href='../Discusion2/discusion2.html'><button type='submit' class='button button2'>REGRESAR</button></a>")
    document.write("</div></div>")
    document.write("°</center>")
}
window.onload= init();