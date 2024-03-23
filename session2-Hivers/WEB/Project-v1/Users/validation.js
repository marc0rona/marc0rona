/* 1 - Declarer JSON variable qui stock les infos arrays de chaque User */
let users = JSON.parse(localStorage.getItem('userList')); //se trouve dans LocalStorage
// nombres de users dans JSON  (Max users) 
let listMax = Number(users.names.length);

function AddUser() /* Function de création d'un compte */
{
    /* declaration des variables à ajouter dans le JSON : users */
    const ajoutNom = document.getElementById("crUser");
    const ajoutPass = document.getElementById("crPassW");

    //Ajout des comptes dans J-SON array
    users.names.push(ajoutNom.value); 
    users.passwords.push(ajoutPass.value);
    alert("Le compte a été créé");
    window.localStorage.setItem('userList',JSON.stringify(users));
    
    //verification dans console si localstorage fonctionne bien
    ///for (var i = 0; i < localStorage.length; i++) {
        //var key = localStorage.key(i);
        //var value = localStorage.getItem(key);
        //console.log(key + ": " + value);
    /// }
}

function DeleteUser() /* Function pour effacer un compte */
{
    //Prend infos du tableau dans LocalStorage
    let users = JSON.parse(localStorage.getItem('userList'));
    let listMax = Number(users.names.length);

    /* declaration de variables pour supprimer */
    const input = document.getElementById("delPassW");
    let invalMsg = document.getElementById("notExist-User");
    /* variable ou se trouve le username a supprimer dans le form */
    const Nom = document.forms["frmLogOut"]["delUser"];

    ///index du J-SON users qui va etre en dehors du tableau [i = -1]
    let userIndex = -1;

    //Recherche si le input = a un user qui existe
    for (var i = 0; i < listMax; i++) 
    {
        if (Nom.value == users.names[i]) 
        {
            userIndex = i;
            break; // Sortir de la boucle quand trouvé
        }
    }

    //Alors, si un User est trouvé 
    if (userIndex != -1) 
    {
        input.style.display = "block";
        document.getElementById("lbl-delUser").style.display = "block";
        invalMsg.innerHTML = "";
        document.getElementById("btnLogOut").style.display = "none";
    
        input.addEventListener("keypress", function(event) {
            if (event.key == "Enter") {
                if (input.value == users.passwords[userIndex]) 
                {
                    alert("Le compte a été supprimer");
                    // Supprimer l'utilisateur choisi selon le input
                    users.names.splice(userIndex, 1);
                    users.passwords.splice(userIndex, 1);

                    window.localStorage.setItem('userList',JSON.stringify(users));
                    //Re-initisier la bloc de Supprimer le compte
                    input.style.display = "none";
                    document.getElementById("lbl-delUser").style.display = "none";
                    document.getElementById("btnLogOut").style.display = "block";
                } 
                else 
                { alert("password incorrecte");  }
            }
        });
    } 
    else 
    {  invalMsg.innerHTML = "Invalid";  } //msg d'invalidité
}

/* Function qui va valider le Log In dans la Section Titre */
function connexionUser() 
{
    //Prend infos du tableau dans LocalStorage
    let users = JSON.parse(localStorage.getItem('userList'));
    let listMax = Number(users.names.length);

    let Nom = document.frmLogIn.Nom; //formName + InputName + .value
    let Password = document.frmLogIn.PassW;
    //Variables qui affiche la date courante
    let msg = document.getElementById("message");
    const date = new Date();

    const d3 = date.getFullYear();
    const d2 = date.getMonth() + 1; //index 0
    const d1 = date.getDate();
    //button de deconnexion
    let Outbutton = document.getElementById("btnLogOut");

    //Liste deroulate qui cherche tous les users disponibles dans le JSON
    for (var i = 0; i < listMax; i++)
    {   //Si le input est disponible ou existe dans le JSON
      if( (Nom.value == users.names[i]) && (Password.value ==  users.passwords[i]) )
     {
       //Ouvrir le site
       alert('Bienvenue a mon site web');
       parent.frames.Menu_Frame.location.href ="indx2-MenuBar.html";

       //Cacher le form pour le LogIn 
       Nom.style.display = "none";
       Password.style.display = "none";
       document.getElementById("btnLogIn").style.display = "none"; //cacher button

       //Center the whole Div
       document.getElementById("uLogin").style.textAlign = "center"; 
       Outbutton.style.visibility = "visible"; //Montrer button deconnexion
       msg.style.fontFamily = "sans-serif";
       msg.style.padding = "10px 10px 10px 10px";
       //Inserez le nom du User
       msg.innerHTML = " <b> Bienvenue " + users.names[i] + "! Profitez d'acheter un livre <br/>" + 
       "<span style='font-size: 25px;padding-top:100px;'>" + d1 + "/ " + d2 + "/ " + d3 + "</b></span>";

       //Changer le contenu au Home-Page
       parent.frames.Content_Frame.location.href ="indx3-Home.html";
     }
     else
     {
      alert('Nom utilisateur ou Mot de passe invalide\n');
	  document.frmLogIn.Nom.focus();
      //T'amene a la page de creation d'Utilisateurs
      parent.frames.Content_Frame.location.href ="indx3-CreationComptes.html";
     }
    }
}
//Quand l'Utilisateur se déconnecte
function DeconxUser()
{
    /* variables LogIn */
    let Nom = document.frmLogIn.Nom; //formName + InputName + .value
    let Password = document.frmLogIn.PassW;
    //Variables qui affiche la date courante
    let msg = document.getElementById("message");
    let Outbutton = document.getElementById("btnLogOut");

    //Retour au Menu non-interractif
    parent.frames.Menu_Frame.location.href ="indx2-NoBar.html";
    parent.frames.Content_Frame.location.href ="indx3-Home.html";

    //Retoure aux titres de LogIn
     Nom.style.display = "block";
     Password.style.display = "block";
     document.getElementById("btnLogIn").style.display = "block"; //montrer button

     //cacher date + message
     msg.innerHTML = "";
     Outbutton.style.visibility = "hidden"; //cacher boutton logOut
}
