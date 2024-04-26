window.onload = function () 
{
    //Verification du cookie dans console
    console.log("Cookie Array:", document.cookie.split(';'));
    //Declaration variables
    let SubTotal = document.getElementById("lbl-SousTotal");
    let lblTax = document.getElementById("lbl-Tax");
    let lblTotal = document.getElementById("lbl-Total");

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
    /* CALCULS POUR RETOURNER VALEURS TAXES */
    let montTaxe = eval(getData("SubTotal") * 0.14975).toFixed(2); 
    
    /* Afficher Calculs + Prix */
    SubTotal.innerHTML = getData("SubTotal");
    lblTax.innerHTML = montTaxe;
    lblTotal.innerHTML = getData("Totale");
}

/* Confirme tous les donnees dans les REGEX */
function CheckRegex()
{
    let Input1 = document.getElementById("cardNumber").value;
    let Input2 = document.getElementById("cardSecurity").value;
    let Input3 = document.getElementById("StrtNumb").value;

    let Input4 = document.getElementById("Pnom").value;
    let Input5 = document.getElementById("Nom").value;
    let Input6 = document.getElementById("StrtName").value;
    let Input7 = document.getElementById("city").value;

    let Input8 = document.getElementById("states").value;
    let Input9 = document.getElementById("codeZIP").value;
    let Input10 = document.getElementById("phoneNumb").value;
    
    /*Card Number */
    if (/^([0-9]{16})$/.test(Input1) == false)
    {
        alert("Numero de Carte incorrecte (16 chiffres SVP)");
    }

    /*Card Security */
    if (/^([0-9]{3})$/.test(Input2) == false)
    {
        alert("Numero de Securite incorrecte (3 chiffres SVP)");
    }

    /* Adress number */
    if (/^([0-9]{3,4})$/.test(Input3) == false)
    {
        alert("Numero de Rue incorrecte (4 ou 3 chiffres SVP)");
    }

    /*All String Formats */
    if (/^([a-zA-Zç-ñÇ-Ñ._-]{3,})$/.test(Input4) == false)
    {
        alert("Prenom invalide (aucun chiffres ou espace SVP)");
    }
    if (/^([a-zA-Zç-ñÇ-Ñ._-]{3,})$/.test(Input5) == false)
    { alert("Nom invalide (aucun chiffres ou espace SVP)"); }
    if (/^([a-zA-Zç-ñÇ-Ñ._-]{3,})$/.test(Input6) == false)
    { alert("Nom de Rue invalide (aucun chiffres ou espace SVP)"); }
    if (/^([a-zA-Zç-ñÇ-Ñ._-]{3,})$/.test(Input7) == false)
    { alert("Ville invalide"); }
    if (/^([a-zA-Zç-ñÇ-Ñ._-]{3,})$/.test(Input8) == false)
    { alert("Province invalide"); }

    /* ZIP Code */
    if (/^([A-z]{1})\d([A-z]{1})[' ']?\d([A-z]{1}\d)$/.test(Input9) == false)
    {
        alert("Code Postal invalide. SVP respectez la bonne syntax");
    }

    /*telephone */
    if (/^([0-9]{9,})$/.test(Input10) == false)
    {
        alert("Numero de Telephonone incorrecte (3 chiffres SVP");
    }


}
function AccesP7()
{
    this.location.href ="Page-7-Payment.html";
}
