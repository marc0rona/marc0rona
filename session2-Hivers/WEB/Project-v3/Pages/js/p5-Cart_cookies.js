//Calcul du nombre de prix a calculer plus tard pour la prochaine page
let Listnumero = 1; //Commence par item #1, avec function AddItem( Listnumero ++) : la liste se deroule 

/* vider cookies quand on reload la page */
window.onload = function () 
{
     /* COOKIES : Vider completement les infos cookies inscrit dans la liste */
     var Cookies = document.cookie.split(';');

     // set 1 Jan, 1970 expiry for every cookies
     for (let i = 0; i < Cookies.length; i++)
     {     
         document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString();
     }
     //Verification du vidage du Array
     console.log("Cookie Array:", document.cookie.split(';'));
}

//JQUERY pour Cacher || Afficher SHOPPING LIST
$(document).ready(function()
{  
    $("#ShoppingCart").hide();
    $("#btnReset").hide(); 
    $("#btnHide").hide();
    $("#btnShow").show();

    $("#btnShow").click
       (function()
        {
            //Echanger de buttons
            $("#btnShow").hide();
            $("#btnHide").show();
            //Afficher Cart 
            $("#SousTitres").hide();
            $("#btnReset").show(); 
            $("#ShoppingCart").show();
        }
     );
     
    $("#btnHide").click
       (function() 
        {
            //Echanger de buttons
            $("#btnHide").hide();
            $("#btnShow").show();
            //Cacher Cart 
            $("#SousTitres").show();
            $("#btnReset").hide(); 
            $("#ShoppingCart").hide();
        }
    );
});
//Fin JQUERY
function MenuSelect() 
{
    /** Ouvrir la page (Tableau) **/
    const TABLE = document.querySelector("table");
    TABLE.style.visibility = "visible";
    //RESET les tableaux
    for (let t = 1; t <= 15; t++) //On va chercher tous les autres tableaux vides (commence pas index non utiliser)
    {
        let TableauVide = document.getElementById("TAB-" + t);
        TableauVide.style.visibility = "visible"; //Re-Ouvrir les tableaux pour afficher les livres (si l'utilisateur repese le button)
    }

    /** Affichage en function du genre choisie **/
    let ListChoix = document.getElementById("genreDropList");
    //Index qui calcul quel tableau sera rempli
    let tabIndx = 1;
    if (ListChoix.value == "All")   //si choix = tous les livres de la Bibliotheque
    {
        for (let i = 0; i <= 15; i++) // 15 tableaux en totale
        {
             //Declaration class qui affiche info des tableaux #1 jusqua #15
            let TabFill = new CalculsTabInfos(tabIndx); 
            //Remplir le tableau (utilsant la classe)
            TabFill.AfficherInfos(i);

            //Using REGEX pour decouper la description en paregraphes
            let paregraphe = Biblio.Description[i].split('\n');
            let itemDesc = document.getElementById(tabIndx + ".desc");
            itemDesc.textContent = ""; //Vider le paregraphe 
            paregraphe.forEach(function(paregraphe) 
            {     
                var p = document.createElement('p'); //Créé un élément <p> pour cahque coupure de \n
                p.textContent = paregraphe;
                //Inserez dans l'element du HTML
                itemDesc.appendChild(p);
            });

            //Quand tableau est rempli, passer au prochain
            tabIndx++; 
        }
    }
    else //Si le choix est selon le genre
    {
        /* Chercher dans le JSON quelles livres sont = au choix de l'utilisateur */
        for (let i = 0; i < Biblio.LivreID.length; i++) // Object.keys(Biblio).length = compte le NB d'elements dans un array JSON
        {
            //Declaration class qui affiche info des tableaux #1 jusqua #15
            let TabFill = new CalculsTabInfos(tabIndx); 

            if (ListChoix.value == Biblio.Genre[i]) //si choix = genre dans la Bibliotheque
            {
                //Remplir le tableau (utilsant la classe)
                TabFill.AfficherInfos(i);
                //Using REGEX pour decouper la description en paregraphes
                let paregraphe = Biblio.Description[i].split('\n');
                let itemDesc = document.getElementById(tabIndx + ".desc");
                itemDesc.textContent = ""; //Vider le paregraphe 

                paregraphe.forEach(function(paregraphe) 
                {     
                    var p = document.createElement('p'); //Créé un élément <p> pour cahque coupure de \n
                    p.textContent = paregraphe;
                    //Inserez dans l'element du HTML
                    itemDesc.appendChild(p);
                });
                //Quand tableau est rempli, passer au prochain
                tabIndx++; 
            }
        }

        //FUNCTION pour cacher les tableaux non-utiliser (si l'utilisateur ne choisie pas ALL)
        for (let t = tabIndx; t <= 15; t++) //On va chercher tous les autres tableaux vides (commence pas index non utiliser)
        {
            let TableauVide = document.getElementById("TAB-" + t);
            TableauVide.style.visibility = "hidden"; //Cache le tableau vide
        }
    }
}

function ChangeLangue()
{
    //Juste change le cover/image a la langue
}
function AddItem(bookID,bookPrix)
{
    const livID = document.getElementById(bookID).textContent;
    const livPrix = document.getElementById(bookPrix).textContent;
    /*-- COOKIES --*/
    //NOTE: A UTILISER SEULEMENT AVEC LIVE SERVER, != LOCAL HOST !=

        // Function CRÉER du cookie avec choix (nom[string] + valeur[num] + jours[num])
        function setCookieData(livreString, choixVal) 
        {
            //nouvels objets dates
            let aujourdhui = new Date();
            let expdate = new Date();
            //plus un an a partir d'aujourdhui le cookie ne s'efface jamais
            expdate.setTime(aujourdhui.getTime() + ( 60*60*1000 ) );
            document.cookie = livreString + "=" + choixVal + ";expires=" + expdate.toGMTString();
            //document.cookie = name + "=" + value + ";";
        }

        //function CREATION du cookie qui contient montant
        function getCookieData(typeString)
        {
            let cookieNeeded = typeString + "=";
            let cookieArray = document.cookie.split(';');
            //Affiche infos des cookies dans Console
            console.log("Cookie Array:", cookieArray);
            for (let i = 0; i < cookieArray.length; i++) 
            {
                while (cookieArray[i].charAt(0) == ' ') 
                {
                    cookieArray[i] = cookieArray[i].substring(1);
                }
                if (cookieArray[i].indexOf(cookieNeeded) == 0) 
                {
                    return cookieArray[i].substring(cookieNeeded.length, cookieArray[i].length);
                }
            }
            return "can't connect with Live server (no cookies)";
        }
        ///AJOUT DANS LE SHOPPING LIST
        let CartListe = document.getElementById("ShoppingList");
        //decalaration du Cookie du Prix
        setCookieData("Price"+ Listnumero, livPrix);
        setCookieData("Livre"+ Listnumero, livID);
        //Titres + Prix qui s'affiche
        CartListe.innerHTML += "<p> " + livID  + " - " + getCookieData("Price"+ Listnumero) + " $ " + "</p>";
        Listnumero++;
}
function DeleteItems()
{
    let CartListe = document.getElementById("ShoppingList");
    //Vider le Shopping List
    CartListe.innerHTML = "";

    //Reset La liste index
    Listnumero = 1;

    /* COOKIES : Vider completement les infos cookies inscrit dans la liste */
    var Cookies = document.cookie.split(';');

    // set 1 Jan, 1970 expiry for every cookies
    for (let i = 0; i < Cookies.length; i++)
    {     
        document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString();
    }
    //Verification du vidage du Array
    console.log("Cookie Array:", document.cookie.split(';'));
}

function AccesP6()
{
    this.location.href ="Page-6-Taxes.html";
}

/** Classe qui gere ce qui est afficher dans chaque Figures (Infos d'un livre) **/
class CalculsTabInfos
{
    //Constructeur : Numero de la Figure/Table de la page (gauche a droite)
    constructor(numb) 
    {  this.numb = numb;  }

    //Methode : Afficher infos de tous les IDs en fonction du JSON (array) + index (choix de l'utilisateur)
    AfficherInfos(indx)
    {
        //COVER IMAGE 
        let imageURL = document.getElementById(this.numb + ".Cover"); //"./Img/Cover1-GeorgeOrwell.jpg";
        imageURL.src  = Biblio.CoverIMG[indx];
        //Utiliser THIS.numb pour rechercher le numero qdu tableau que j'indique dans le code
        let itemID = document.getElementById(this.numb.toString() + ".BookID");
        itemID.innerHTML = Biblio.LivreID[indx];

        let itemTitre = document.getElementById(this.numb + ".titres");
        itemTitre.textContent = Biblio.Titres[indx];

        let itemAuteur = document.getElementById(this.numb + ".auteur");
        itemAuteur.textContent = Biblio.Auteurs[indx];

        let itemPublic = document.getElementById(this.numb + ".pub");
        itemPublic.textContent = Biblio.Publication[indx];

        let itemPages = document.getElementById(this.numb + ".pages");
        itemPages.textContent = Biblio.Pages[indx];

        let itemGenre = document.getElementById(this.numb + ".genre");
        itemGenre.textContent = Biblio.Genre[indx];

        let itemPrix = document.getElementById(this.numb + ".prix");
        itemPrix.textContent = Biblio.Prix[indx];
    }
}

