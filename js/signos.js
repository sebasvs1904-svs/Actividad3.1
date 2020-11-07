var resetButton;
var imagen;
var currentDiv;
var newDiv;
function validaFechaMenor(campo){
    var bRet = false;
    
    var dHoy = new Date();
    var dCapt = null;
    if (campo.value == "")
    alert("Faltan datos");
    else{
    dCapt = validaFecha(campo.value);
    if (dCapt != null && dCapt < dHoy)
    bRet = true;
    else
    alert("La fecha debe ser menor a la fecha actual");
    }
    return bRet;
    }
    function validaFecha(valor){
        var dConvertida = null;
        var sAnio = "";
        var sMes = "";
        var sDia = "";
        var nAnio=0, nMes=0, nDia = 0;
        if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
            nDia = parseInt(valor.substring(8), 10);
            nMes = parseInt(valor.substring(5,7), 10);
            nAnio = parseInt(valor.substring(0,4), 10);
        if (nDia <1 || nDia>31)
        alert("El día no es válido")
        else{
        if (nMes <1 || nMes>12)
        alert("El mes no es válido");
        else{
        if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
        nMes==8 || nMes==10 || nMes==12) && nDia > 31)
        alert("El mes tiene máximo 31 días");
        else if ((nMes==4 || nMes==6 || nMes==9 ||
        nMes==11) && nDia > 30)
        alert("El mes tiene máximo 30 días");
        else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
        alert("Febrero tiene 28 días o 29 en bisiesto");
        else{
        dConvertida = new Date();
        dConvertida.setFullYear(nAnio, nMes-1, nDia);
        }//fin validaci􀳦n día-mes
        }//mes válido
        }//día válido
        creasigno(nDia,nMes);
        }//formato válido
        else{
            alert("No tiene formato de fecha");
            }
            return dConvertida;
            }
 function creasigno(nDia,nMes){
        var color="";
             newDiv = document.createElement("div");
           
            if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
                color="FF0000";
                var newContent = document.createTextNode("SIGNO ARIES");
            }
            else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
                color="0BB300";
                var newContent = document.createTextNode("SIGNO TAURO");
            }
            else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
                color="FBFF00";
                var newContent = document.createTextNode("SIGNO GEMINIS");
            }
            
            else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
                color="FF00F7";
                var newContent = document.createTextNode("SIGNO CANCER");
            }
            
            else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
                color="B08B00";
                var newContent = document.createTextNode("SIGNO LEO");
            }
           
            else if((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
                color="0013FE";
                var newContent = document.createTextNode("SIGNO VIRGO");
            }
           
            else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
                color="00FAFE";
                var newContent = document.createTextNode("SIGNO LIBRA");
            }
            
            else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                color="4b0082";
                var newContent = document.createTextNode("SIGNO ESCORPIO");
                
            }
            
            else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                color="78288C";
                var newContent = document.createTextNode("SIGNO SAGITARIO");
            }
            
            else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                color="9C9C9C";
                var newContent = document.createTextNode("SIGNO CAPRICORNIO");
            }
            
            else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                color="008081";
                var newContent = document.createTextNode("SIGNO ACUARIO");
            }
            
            else if ((nDia>=22) && (nMes==2) || (nDia <=23) && (nMes==3)){
                var newContent = document.createTextNode("SIGNO PICIS");
                color="8C004B";
            }
            
            //var newContent = document.createTextNode("SIGNO");
             //añade texto al div creado.
            // añade el elemento creado y su contenido al DOM
            
            imagen= document.createElement("img");
            imagen.src = "img/"+color+".png";
            imagen.style="width: 150px; height: 200px; "
            currentDiv= document.getElementById("div");
            //document.body.insertBefore(newDiv, currentDiv);
           document.body.insertBefore(newDiv, currentDiv);
        newDiv.style="border: 3px solid #999999; background-color:#"+color+"; width: 200px ;height:300px ";
        newDiv.appendChild(newContent);
        newDiv.appendChild(imagen);
        //botonelimina();
        resetButton = document.createElement("button");
        resetButton.textContent = 'Eliminar signo';
        resetButton.style="text-decoration: none; padding: 10px; font-weight: 600; font-size: 20px; color: #ffffff; background-color: #1883ba; border-radius: 6px; border: 2px solid #0016b0;"
        document.body.appendChild(resetButton);
       botonsig.disabled = true;
        campfech.disabled=true;
        resetButton.addEventListener('click', reset);

}
function reset() {
    resetButton.parentNode.removeChild(resetButton);
    newDiv.parentNode.removeChild(newDiv);
    botonsig.disabled = false;
    campfech.disabled=false;
    
}

        //
