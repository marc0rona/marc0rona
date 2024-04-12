function MenuSelect() 
{
    const ListElement = document.getElementById("genreDropList");
    let DisplayElmnt = document.getElementById("testing");

    DisplayElmnt.textContent = ListElement.value;

    /* Afficher ID en function du JavaScript (testing - choix) */
    let itemID = document.getElementById("1.BookID");
    itemID.innerHTML = Biblio.LivreID[1];
    let itemTitre = document.getElementById("1.titres");
    itemTitre.textContent = Biblio.Titres[1];
    let itemAuteur = document.getElementById("1.auteur");
    itemAuteur.textContent = Biblio.Auteurs[1];
    let itemPublic = document.getElementById("1.pub");
    itemPublic.textContent = Biblio.Publication[1];
    let itemPages = document.getElementById("1.pages");
    itemPages.textContent = Biblio.Pages[1];
    let itemGenre = document.getElementById("1.genre");
    itemGenre.textContent = Biblio.Genre[1];
    //Using REGEX pour decouper la description en paregraphes
    let paregraphe = Biblio.Description[1].split('\n');
    let itemDesc = document.getElementById("1.desc");
    itemDesc.textContent = ""; //Vider le paregraphe 

    paregraphe.forEach(function(paregraphe) 
    {
        var p = document.createElement('p'); //Créé un élément <p> pour cahque coupure de \n
        p.textContent = paregraphe;
        //Inserez dans l'element du HTML
        itemDesc.appendChild(p);
    });

    /* Tableau 2 */
    let itemID2 = document.getElementById("2.BookID");
    itemID2.innerHTML += Biblio.LivreID[0];
    let itemTitre2 = document.getElementById("2.titres");
    itemTitre2.textContent = Biblio.Titres[0];
    let itemAuteur2 = document.getElementById("2.auteur");
    itemAuteur2.textContent = Biblio.Auteurs[0];
    let itemPublic2 = document.getElementById("2.pub");
    itemPublic2.textContent = Biblio.Publication[0];
    let itemPages2 = document.getElementById("2.pages");
    itemPages2.textContent = Biblio.Pages[0];
    let itemGenre2 = document.getElementById("2.genre");
    itemGenre2.textContent = Biblio.Genre[0];

    let itemDesc2 = document.getElementById("2.desc");
    itemDesc2.textContent = Biblio.Description[0];
}
function ChangeLangue()
{
    //Juste change le cover/image a la langue
}
function AddItem(Tab, ListeTitre)
{
    const Choice = document.getElementById(Tab).textContent;
    const ListeChoix = document.getElementById(ListeTitre).textContent;

    /*-- COOKIES --*/
    // Function AFFICHER du cookie avec choix (nom[string] + valeur[num] + jours[num])
    function setCookieData(livreString, choixVal, ExpireDays) 
    {
        const expires = "; expires=" + new Date(Date.now() + ExpireDays * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = livreString + "=" + choixVal + expires + "; path=/";
        //"montant=0.00; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    //function CREATION du cookie qui contient montant
    function getCookieData(typeString)
    {
        const cookieNeeded = typeString + "=";
        const readableCookieArray = decodeURIComponent(document.cookie);
        const cookieArray = readableCookieArray.split(';');
        for (let i = 0; i < cookieArray.length; i++) 
        {
            while (cookieArray[i].charAt(0) == ' ') 
            {
                cookieArray[i] = cookie.substring(1);
            }
            if (cookieArray[i].indexOf(cookieNeeded) == 0) 
            {
                return cookieArray[i].substring(cookieNeeded.length, cookieArray[i].length);
            }
        }
        return "";
    }
    setCookieData("Livre", Choice, 2); //expire 2 jours apres creation
    //ConsoleLog - testing Getting the Data in JSOn
    console.log(getCookieData("Livre"))

    ///AJOUT DANS LE SHOPPING LIST
    let CartListe = document.getElementById("ShoppingList");
    setCookieData("Livre", ListeChoix, 2); //expire 2 jours apres creation
    //ConsoleLog - testing Getting the Data in JSOn
    CartListe.innerHTML += "<p> " + getCookieData("Livre") + "</p>";
}
function DeleteItems()
{
    let CartListe = document.getElementById("ShoppingList");
    //Vider le Shopping List
    CartListe.innerHTML = "";
}

function AccesP6()
{
    this.location.href ="Page-6-Taxes.html";
}
