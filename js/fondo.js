function changeColor(x) {
    if(x==0){
        var body=document.getElementById("body");
        body.style.backgroundColor= "#006b05";
        lista[x].style.color="white";
        lista[x+1].style.color="white";
        
    }else if(x==1){
        var body=document.getElementById("body");
        body.style.backgroundColor= "#00412e";
        lista[x].style.color="yellow";
        lista[x-1].style.color="yellow";
    
    }
}
function hacerclic(){

    lista=document.querySelectorAll("#principal p");
        lista[0].onclick=mostraralerta;
    lista[1].onclick=mostraralerta;

    }
    
    
    function mostraralerta(){
    alert('Hizo clic!');
    }
    window.onload=hacerclic;
    function cambiar(x) {
        if(x==0){
            lista[x].style.color="RED";
            lista[x+1].style.color="Blue";
            
        }else if(x==1){
            lista[1].style.color="Cyan";
            lista[0].style.color="yellow";
        
        }
    }
