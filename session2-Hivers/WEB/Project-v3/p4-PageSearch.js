// Variables globales (Array qui contient tous les TITRES de Genres/Recherches)
const titres = new Array("Science-Fiction", "Fantasie", 
                         "Réalisme", "Histoire", "Bande-Dessinée");

function Searching()
{
    //Vider l'alerte 
    document.getElementById('alerteMSG').innerHTML = "";
    //transform le text INPUT en majuscule pour meilleur lecteur dans fonction
    let input = document.getElementById('UserInput').value.toUpperCase();

    //id ou le Titre va etre afficher
    let TitrePage = document.getElementById('TitleScreen');
    //Tous les text box avec les definitions
    let TextBox = document.getElementById('DescBox');
    let Genre1 = document.getElementById('desc1-SciFi');
    Genre1.style.display = "none";
    let Genre2 = document.getElementById('desc2-Fantasy');
    Genre2.style.display = "none";
    let Genre3 = document.getElementById('desc3-Realism');
    Genre3.style.display = "none";
    let Genre4 = document.getElementById('desc4-History');
    Genre4.style.display = "none";
    let Genre5 = document.getElementById('desc5-Kidz');
    Genre5.style.display = "none";
    //id pour le button
    let BTN = document.getElementById('btnSearch');
    BTN.style.display = "block";
    //id pour l'image a droite
    let bgIMG = document.getElementById('DescImg');
    bgIMG.innerHTML = "";

    /* BOUCLE qui calcule se qui est input + Affichage */
   switch(input)
   {
      /// GENRE #1
         case 'SCIENCE':
         case 'SCIENCE-FICTION':
            //affiche titre selon ARRAY
            TitrePage.innerHTML = titres[0].toString(); 
            //Afficher Recherche Texte
            TextBox.style.display = "block";
            Genre1.style.display = "block";
            bgIMG.innerHTML = "<img src='./Img/IconsFiller/R-BackGrnd-Space.png' alt='BG_img' width='600px'></img>"
         break;

        /// GENRE #2
         case 'FANTASIE':
         case 'FANTASY':
         case 'FANTASTIQUE':
            TitrePage.innerHTML = titres[1].toString(); 
            //Afficher Recherche Texte
            TextBox.style.display = "block";
            Genre2.style.display = "block";
            bgIMG.innerHTML = "<img src='./Img/IconsFiller/R-BackGrnd-Fanta.png' alt='BG_img' width='600px'></img>"
         break;
        /// GENRE #3
         case 'REAL':
         case 'REALSITIQUE':
         case 'REALSIME':
            //affiche titre selon ARRAY
            TitrePage.innerHTML = titres[2].toString(); 
            //Afficher Recherche Texte
            TextBox.style.display = "block";
            Genre3.style.display = "block";
            bgIMG.innerHTML = "<img src='./Img/IconsFiller/R-BackGrnd-Realsm.png' alt='BG_img' width='600px'></img>"
         break;
        /// GENRE #4
         case 'HISTORY':
         case 'HISTOIRE':
            //affiche titre selon ARRAY
            TitrePage.innerHTML = titres[3].toString(); 
            //Afficher Recherche Texte
            TextBox.style.display = "block";
            Genre4.style.display = "block";
            bgIMG.innerHTML = "<img src='./Img/IconsFiller/R-BackGrnd-Napoleon.png' alt='BG_img' height='600px'></img>"
         break;
         /// GENRE #5
         case 'BANDE-DESSINE':
         case 'BANDE-DESSINÉ':
         case 'BANDE-DESSINÉE':
         case 'ENFANTS':
         case 'COMICS':
         case 'KIDS':
            //affiche titre selon ARRAY
            TitrePage.innerHTML = titres[4].toString(); 
            //Afficher Recherche Texte
            TextBox.style.display = "block";
            Genre5.style.display = "block";
            bgIMG.innerHTML = "<img src='./Img/IconsFiller/R-BackGrnd-BD.png' alt='BG_img' width='600px'></img>"
         break;
         //Cas d'invalidité
         default:
            BTN.style.display = "none";
            TextBox.style.display = "none";
            TitrePage.innerHTML = "Ce terme n'existe pas";
            bgIMG.innerHTML = "";
            document.getElementById('alerteMSG').innerHTML = "SVP entrer un des 5 genres disponibles dans notre site : <br/> " + 
                                " <li> Science-Fiction </li> <li> Fantastique </li> <li> Réalisme </li> <li> Histoire </li> <li> Bande-Dessinée </li>";
         break;
   }
}

//Function button
function AccesP5()
{
    this.location.href ="Page-5-Achats.html";
}