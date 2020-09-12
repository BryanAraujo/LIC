function init(){
    var metros = prompt('Digite los metros a convertir: ');
    var yardas;
    yardas = metros*1.09;
    document.write("<center>");
    document.write("<div class='contenido'><div class='hijo'>");
    document.write("<h1 class='tema'>Conversiones</h1><h1>Metros ingresados: "+metros+" metros");
    document.write("<br>Conversion a yardas: "+yardas+" yardas</h1>");
    document.write("<a href='../Discusion2/discusion2.html'><button type='submit' class='button button3'>REGRESAR</button></a>")
    document.write("</div></div>")
    document.write("°</center>")
}
window.onload= init();