function Play(elt_app, elt_suppr,nb, question){

document.getElementById(elt_suppr).className = "display_none";
document.getElementById(elt_app).className = "display_initial";
document.getElementById("niveau").innerHTML  = nb;
document.getElementById("consigne").innerHTML  = question;

}

function afficher_aide(){
document.getElementById('menu_aide').className = "display_initial";
}


function fermer_aide(){
document.getElementById('menu_aide').className = "display_none";
}
function game_over(){
document.getElementById('game_over').className = "display_initial";
}


function refresh(){
    document.getElementById('restart_demande').className = "display_initial";
}
    function yes(){
    document.location.reload(false);
    }
    function no(){
     document.getElementById('restart_demande').className = "display_none";
    }



function nombre_mystère(){
    
var nb = 47;    
    
var y =  document.getElementById("champ_texte").value;


 if(nb==y){
    document.getElementById('bouton_plus').style.backgroundColor = '#01DF01';
    document.getElementById('bouton_moins').style.backgroundColor = '#01DF01';
    document.getElementById('bouton_finish').className = "display_initial";
    document.getElementById("consigne").innerHTML  = '...'
     
 }
else if(nb<y){ 
    document.getElementById('bouton_moins').style.backgroundColor = '#8A0829';
    document.getElementById('bouton_plus').style.backgroundColor = '#000000';
    
}

else if(nb>y){    
     document.getElementById('bouton_plus').style.backgroundColor = '#8A0829';
    document.getElementById('bouton_moins').style.backgroundColor = '#000000';
}
    

}
