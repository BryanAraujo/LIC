//Registrar evento click al presionar el botón de envío
function iniciar() {
    var btnenviar = document.getElementById("btnSend");
    //Al producirse un click sobre el botón de envío
    //invocar los métodos del objeto carro que mostrarán
    //los valores ingresados en el formulario
    if (btnenviar.addEventListener) {
        btnenviar.addEventListener("click", function () {
            var chkvalue, nuevoRegistro;
            var radiofield = document.frmmat.elements["chkgender"];
            for (var i = 0; i < radiofield.length; i++) {
                if (radiofield[i].checked) {
                    chkvalue = radiofield[i].value;
                }
            }
              nuevoRegistro = new Registro(document.frmmat.txtname.value, document.frmmat.txtlastname.value,
                document.frmmat.txtage.value,chkvalue,document.frmmat.txtemail.value, document.frmmat.txtdate.value,
                document.frmmat.txtpais.value,document.frmmat.txtdire.value);
                nuevoRegistro.matricular();
                nuevoRegistro.imprimir();
        }, false);
    }
    else {
        btnenviar.attachEvent("onclik", function () {
            var chkvalue, nuevoalumno;
            var radiofield = document.frmmat.elements["chkgender"];
            for (var i = 0; i < radiofield.length; i++) {
                if (radiofield[i].checked) {
                    chkvalue = radiofield[i].value;
                }
            }

            nuevoRegistro = new Registro(document.frmmat.txtname.value, document.frmmat.txtlastname.value,
                document.frmmat.txtage.value,chkvalue,document.frmmat.txtemail.value, document.frmmat.txtdate.value,
                document.frmmat.txtpais.value,document.frmmat.txtdire.value);
                nuevoRegistro.matricular();
                nuevoRegistro.imprimir();
        });
    }
}


//Definiendo la clase alumnoUDB haciendo uso de sintaxis de función
function Registro(nombre, apellido, edad, genero,email,fecha,pais,direccion) {
    //Propiedades de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.email = email;
    this.fecha = fecha;
    this.pais = pais;
    this.direccion = direccion;
    this.numR = null;
    //Métodos de la clase
    this.matricular = function () {
        var iniciales = this.apellido;
        String.prototype.obtenerIniciales= function(glue){
            if (typeof glue == "undefined") {
                var glue = true;
            }
        
            var iniciales = this.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
            
            if (glue) {
                return iniciales.join('');
            }
        
            return  iniciales;
        };
        
        String.prototype.capitalize = function(){
            return this.toLowerCase().replace( /\b\w/g, function (m) {
                return m.toUpperCase();
            });
        };
        
        //para probar es un metodo extension del objeto
        var inicialesPersona= iniciales.obtenerIniciales();
        if(inicialesPersona.length == 2){
            
        }
        else{
            inicialesPersona = inicialesPersona+inicialesPersona;
        }
      

        this.numR = inicialesPersona + Math.round(Math.random()*9)+Math.round(Math.random()*9)
        +Math.round(Math.random()*9)+Math.round(Math.random()*9);
    }
    this.imprimir = function () {
        document.write("<!DOCTYPE html>\n");
        document.write("<html lang=\"es\">\n");
        document.write("<head>\n\t");
        document.write("<title>Persona registrada</title>\n");
        document.write("<meta charset=\"utf-8\" />");
        document.write("<link rel=\"stylesheet\" href=\"css/infoalumno.css\"/>\n");
        document.write("</head>\n");
        document.write("<body>\n");
        document.write("<table class=\"carinfo\"><tr>\n");
        document.write("<th colspan=\"2\">Datos de la persona</th>\n");
        document.write("<tr><td>Numero de registro: </td>\n");
        document.write("<td>" + this.numR + "</td></tr>\n");
        document.write("<tr><td>Nombre Completo: </td>\n");
        document.write("<td>" + this.nombre + " " + this.apellido + "</td></tr>\n");
        document.write("<tr><td>Edad: </td>\n");
        document.write("<td>" + this.edad + "</td></tr>\n");
        document.write("<tr><td>Género: </td>\n");
        document.write("<td>" + this.genero + "</td></tr>\n");
        document.write("<tr><td>Correo Electronico: </td>\n");
        document.write("<td>" + this.email + "</td></tr>\n");
        document.write("<tr><td>Fecha de Nacimiento: </td>\n");
        document.write("<td>" + this.fecha + "</td></tr>\n");
        document.write("<tr><td>Pais: </td>\n");
        document.write("<td>" + this.pais + "</td></tr>\n");
        document.write("<tr><td> Dirección: </td>\n");
        document.write("<td>" + this.direccion + "</td></tr>\n");
        document.write("</tr></table>\n");
        
        document.write("</head>\n");
        document.write("</html>\n");
    }
    this.formato = function (valor) {
        if (valor < 10) valor = "0" + valor;
        return valor;
    }
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}