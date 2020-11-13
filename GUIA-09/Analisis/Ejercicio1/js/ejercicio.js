var btnaplicar = document.getElementById('button');
var btnelimnar = document.getElementById('eliminar');
var estilos = document.getElementById('estilos');

function init() {
    if (btnaplicar.addEventListener) {
        btnaplicar.addEventListener('click', function () {
          var A=  document.frm.select.options[document.frm.select.selectedIndex].value;
          aplicar(A);
        })
    }
    if(btnelimnar.addEventListener){
        btnelimnar.addEventListener('click',function(){
            eliminar();
        })
    }
}

function aplicar(estilo) {
    if (estilo == "Estilo1") {
        estilos.style.color = 'purple';
        estilos.style.fontSize = '30px';
        estilos.style.padding = '20px';
        estilos.style.backgroundColor = 'LightSkyBlue';
        estilos.style.textAlign = 'justify'
        estilos.style.textShadow = 'none';
    }
    if(estilo == "Estilo2"){
        estilos.style.color = 'red';
        estilos.style.fontSize = '16px';
        estilos.style.padding = '10px';
        estilos.style.backgroundColor = 'blue';
        estilos.style.textAlign = 'none';
        estilos.style.textShadow = '0px 0px 30px #F09, 0px 0px 30px #F09, 0px 0px 30px #F09';
    }
    if(estilo == "Estilo3"){
        estilos.style.color = 'white';
        estilos.style.fontSize = '16px';
        estilos.style.padding = '10px';
        estilos.style.backgroundColor = 'black';
        estilos.style.textAlign = 'center';
        estilos.style.textShadow = '1px 1px 0px #333,2px 2px 0px #333, 3px 3px 0px #333,4px 4px 0px #333, 5px 5px 0px #333,6px 6px 0px #333,7px 7px 0px #333, 8px 8px 0px #333,9px 9px 0px #333, 11px 11px 10px #000';
    }
}
function eliminar(){
    estilos.style.color = '';
    estilos.style.fontSize = '';
    estilos.style.padding = '';
    estilos.style.backgroundColor = '';
    estilos.style.textAlign = ''
    estilos.style.textShadow = '';
}
if (window.addEventListener) {
    window.addEventListener("load",init,false);
}
else if (window.attachEvent){
    window.attachEvent('onload', init);
}