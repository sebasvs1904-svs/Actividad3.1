function hacerclic(){

    lista=document.querySelectorAll("#principal p");
        lista[0].onclick=mostraralerta;
    lista[1].onclick=mostraralerta;
    lista[2].onclick=mostraralerta;

    }
    
    
    function mostraralerta(){
    alert('Traduciendo..');
    }
    window.onload=hacerclic;
    function cambia(x) {
        if(x==0){
            lista[x].style.color="white";
            lista[x].innerHTML="Hello Word";
            
        }else if(x==1){
            lista[x].style.color="Yellow";
            lista[x].innerHTML="learning javascript";
            return false
        }else{
            lista[0].style.color="orange";
            lista[0].innerHTML="Hello Word";
            lista[1].style.color="red";
            lista[1].innerHTML="learning javascript";
        }

    }