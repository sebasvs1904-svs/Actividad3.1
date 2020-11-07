var c=0;
		function agregaLinea(){
			var oTbl = document.getElementById("tblUno");
			var oLin = oTbl.insertRow(-1);
			var oCelda1 = oLin.insertCell(0);
			var oCelda2 = oLin.insertCell(1);

			oCelda1.innerHTML = "Celda:    "+ ++c;
			oCelda2.innerHTML = 'Texto y campo ' +
			'<input type="text" name="campo"/>';
			if(c % 2 == 0)
			oCelda1.style.color="#13e200";
			else 
			oCelda1.style.color="yellow"
		}

		function eliminaLinea(){
			var oTbl = document.getElementById("tblUno");
			--c;
			oTbl.deleteRow(-1) ;
		}