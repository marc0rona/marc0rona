window.onload = function () 
{
    //Verification du cookie dans console
    console.log("Cookie Array:", document.cookie.split(';'));

    /* Declaration varaibles */
    let cTitres = document.getElementById("choixTitres");
    let cPrix = document.getElementById("choixPrix");
    Listnumero = 1; //index a 1

    //function pour chercher les cookies qui contienent montants
    function getData(typeString)
    {
        let cookieNeeded = typeString + "=";
        let cookieArray = document.cookie.split(';');

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
        return "";
    }

    //En utilisant boucle (avec un maximum de livres disponibles a acheter), cherche et affiche info des cookies
    for (let i = 1; i <= 10; i++) 
    { 
        if (getData("Price"+ i)  == "") //si le panier est vide dans cette partie du cookie array
        {
            cTitres.innerHTML += "";
            cPrix.innerHTML += ""; //ne rien ajouter a la facture
        }
        else
        {
            cTitres.innerHTML += "<p> " + getData("Livre"+ i) +  "</p>";
            cPrix.innerHTML += "<p>" + "$ " + Number(getData("Price"+ i)).toFixed(2) + "</p>";
            //mettre les varaible de prix avec 2 nombres apres virgule
        }
    }
    /* CALCULS POUR TAXES & TOTALE */
    //Declaration variables
    let SubTotal = document.getElementById("lbl-SousTotal");
    let lblGST = document.getElementById("lbl-GST");
    let lblQST = document.getElementById("lbl-QST");
    let lblTotal = document.getElementById("lbl-Total");

    // partie 1 : calculs du sousTotal en function des prix dans cookies */
    let calculPrix = 0; //initier a 0$  
    for (let i = 1; i <= 10; i++) 
    {
        calculPrix += Number(getData("Price"+ i));
    }

    SubTotal.innerHTML = "$ " + calculPrix.toFixed(2);

    //partie 2 : Calculs numeriques pour taxes 
    const montant = Number(calculPrix); //Change a un Nombre + 2 decimales
    let t1 = eval(0.05 * montant).toFixed(2);
    let t2 = eval(0.09975 * montant).toFixed(2);
    let montTaxe = eval(montant * 0.14975); 
    let montTotale = eval(montant + montTaxe).toFixed(2) //avec 2 decimale apres

    //partie 3 : Affichage des calculs dans la facture
    lblGST.innerHTML = "$ " + t1;
    lblQST.innerHTML = "$ " + t2;
    lblTotal.innerHTML = "$ " + montTotale;
    lblTotal.style.fontWeight = 'bold'; //Mettre resultat en Bold

    // Function CRÉER des montants a payer 
    function setData(livreString, montantValeur) 
    {
         //nouvels objets dates
         let aujourdhui = new Date();
         let expdate = new Date();
         //plus un an a partir d'aujourdhui le cookie ne s'efface jamais
         expdate.setTime(aujourdhui.getTime() + ( 60*60*1000 ) );
         document.cookie = livreString + "=" + montantValeur + ";expires=" + expdate.toGMTString();
         //document.cookie = name + "=" + value + ";";
    }
    setData("Totale", montTotale);
    setData("SubTotal", calculPrix.toFixed(2));
}

function AccesP7()
{
    this.location.href ="Page-7-Payment.html";
}
