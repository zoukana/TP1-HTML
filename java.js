let choix=true;

function changecouleur(){
 

    let bloc1= document.getElementById("ff");
    let text1= document.getElementById("color1");
    let bloc2= document.getElementById("pp");
    let text2= document.getElementById("color2");
    let bloc3= document.getElementById("ll");
    let text3= document.getElementById("color3");
    let bloc4= document.getElementById("ii");
    let text4= document.getElementById("color4");

 if (choix==true) {
    bloc1.style.backgroundColor ="white";
    text1.style.color="red";

    bloc2.style.backgroundColor ="white";
    text2.style.color="red";

    bloc3.style.backgroundColor ="white";
    text3.style.color="red";

    bloc4.style.backgroundColor ="white";
    text4.style.color="red";
    choix=false;
   
    }else{
        bloc1.style.backgroundColor ="black";
        text1.style.color="yellow";

        bloc2.style.backgroundColor ="black";
        text2.style.color="yellow";

         bloc3.style.backgroundColor ="black";
         text3.style.color="yellow";

         bloc4.style.backgroundColor ="black";
         text4.style.color="yellow";
         choix=true;
    }
}
document.getElementById("loginform").addEventListener("submit",function(e){/**ici 
je recupére le "id" qui contient mon formulaire ensuite je crée un évenement
ecouteur a laquelle je pointe mon bouton grace a son "id" et ainsi je crée une fonction */
    e.preventDefault();/*cette élément me permet de ne pas rafraichir la page une fois 
     que j'appuie sur le bouton "envoyer*/
    let erreur;/*je déclare une variable "erreur" qui ne contient pour me permettre
    d'afficher mes message d'erreur plustard */
    let pseudo=document.getElementById("class1");//pseudo recupére le prénom
    let nom=document.getElementById("class2");
    let email=document.getElementById("class3");
    let tel=document.getElementById("class4");

    if(!tel.value){/*ici je pose la condition si tel recupére value c"est a dire que dans le
    champ tel est vide de m'afficher erreur */
        erreur="veuillez renseignez votre numéro téléphone";/*ici erreur va prendre cette
                                                                messgage*/
    }
    if(!email.value){
        erreur="veuillez renseignez votre email";
    }
    if(!nom.value){
        erreur="veuillez renseignez votre nom";
    }

    if(!pseudo.value){
        erreur="veuillez renseignez votre prenom";
    }
    if(erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML=erreur;
        return false;
    }else{
        let resultat1=document.getElementById("class1").value /*je crée un variable resultat1
        qui va se pointer sur le id="classe1" et recuperer la saisit grace au "value"*/
        let resultat2=document.getElementById("class2").value 
        let resultat3=document.getElementById("class3").value 
        let resultat4=document.getElementById("class4").value 
        let infos=[resultat1,resultat2,resultat3,resultat4];
        console.log(infos);
       
     alert("les données que vous avez renseigner sont: \n"+
     "Prenom:" + resultat1+
     "\nNom:" + resultat2+
     "\nEmail:" +resultat3+
     "\nTel:" +resultat4);/*puis j'appelle ma fonction alert pour
                  m'afficher les contenue de on tableau*/
        alert("Mr/Mme,"+resultat2+ " :\nvotre formulaire a bien été envoyé!");

    }
});
   

