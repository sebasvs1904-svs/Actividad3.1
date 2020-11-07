var nam = null;
	var ape1=null;
	var ape2=null;
	var fech=null;
	var RFC=null;
	function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = "abcdefghijklmnopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }
  		function valida(){
			var bRet = false;
			alert("Recibiendo parametros");
			nam = document.getElementsByName("nam")[0].value;
			ape1=document.getElementsByName("ape1")[0].value;
			 ape2=document.getElementsByName("ape2")[0].value;
			fech=validaFecha(document.getElementsByName("fech")[0].value);
			alert(fech+" ");
			//validaFecha(fech);
			alert("PAso 1ra validacion"+fech);
			RFC=document.getElementsByName("txtRFC")[0].value;
			if(nam!=null && ape2!=null && fech!=null && ape1!=null && RFC!=null){
				alert("Paso 2 validacion");
				if(RFC.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/)){
					alert("Paso 3 validacion"+RFC.substring(0,2)+"  "+(ape1.substring(0,2)).toUpperCase());
					if(RFC.substring(0,2)==(ape1.substring(0,2).toUpperCase())){
						alert("Paso 4 validacion");
						if(RFC.substring(2,3)==(ape2.substring(0,1).toUpperCase())){
							alert("Paso 5 validacion");
							if(RFC.substring(3,4)==(nam.substring(0,1).toUpperCase())){
								alert("Paso 6 validacion"+RFC.substring(4,6)+"  "+fech.substring(2,4)+"  "+RFC.substring(6,8)+" "+fech.substring(8)+"  "+RFC.substring(8,10)+"  "+fech.substring(5,7));
								if((RFC.substring(4,6)==fech.substring(2,4))&&(RFC.substring(6,8)==fech.substring(8))&&(RFC.substring(8,10)==fech.substring(5,7)))
								bRet=true;
								else
								alert("La fecha ingresada no coincide con su RFC")
							}
							else
							alert("La primer letra de su nombre no coincide con su RFC")

						}
						else
						aler("La primer letra de su apellido materno no coincide con su RFC")
					}
				else
					alert("Las primeras 2 letras no coinciden con tu apellido")
				}
				else
				alert("No tiene formato de RFC");
			}
			/*nDia = parseInt(fech.substring(8), 10);
            nMes = parseInt(fech.substring(5,7), 10);
			nAnio = parseInt(fech.substring(0,4), 10);
			alert("dia.- "+nDia+"     mes.-"+nMes+"     año.-"+nAnio);
			
			if (campo.value == "")
				alert("Faltan datos");
			else
				if (campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/)){
					
				}
					
				else
				alert("No tiene formato de RFC");
					*/
					//alert();
					//alert(nam+"  "+ape1+"  "+ape2+"  "+fech+"  "+RFC+"  "+dia+"  "+nMes+"  "+nAnio);
			return bRet;
		}
		function validaFecha(valor){
        var dConvertida = null;
        var sAnio = "";
        var sMes = "";
        var sDia = "";
		var nAnio=0, nMes=0, nDia = 0;
		alert(valor)
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
        dConvertida=valor;
        }//fin validaci􀳦n día-mes
        }//mes válido
        }//día válido
        }//formato válido
        else{
            alert("No tiene formato de fecha");
            }
            return dConvertida;
            }
