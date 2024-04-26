/* 1 - Declarer JSON variable qui stock les infos arrays de chaque User */
let users = JSON.parse(localStorage.getItem('userList')); //se trouve dans LocalStorage

class DeletingFunction
{
        //cacher element selon ids
        CacherID(password, message, button)
        {
            password.style.display = "none";
            message.style.display = "none";
            button.style.display = "block";
        }
        AfficherID(password, message, button)
        {
            password.style.display = "block";
            message.style.display = "block";
            button.style.display = "none";
        }
}
function AddUser() /* Function de création d'un compte */
{
    //Prend infos du tableau dans LocalStorage
    let users = JSON.parse(localStorage.getItem('userList'));
    /* declaration des variables à ajouter dans le JSON : users */
    const ajoutNom = document.getElementById("crUser");
    const ajoutPass = document.getElementById("crPassW");

    //Ajout des comptes dans J-SON array
    users.names.push(ajoutNom.value); 
    users.passwords.push(ajoutPass.value);
    alert("Le compte a été créé");
    window.localStorage.setItem('userList',JSON.stringify(users));
}

function DeleteUser() /* Function pour effacer un compte */
{
    //Prend infos du tableau dans LocalStorage
    let users = JSON.parse(localStorage.getItem('userList'));
    // nombres de users dans JSON  (Max users) 
    let listMax = Number(users.names.length);

    /* declaration de variables pour supprimer */
    const input = document.getElementById("delPassW");
    let invalMsg = document.getElementById("notExistUser");
    let verifPassW = document.getElementById("lbl-delUser");
    let Displaying = new DeletingFunction(); 
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
        invalMsg.innerHTML = "";
        Displaying.AfficherID(input,verifPassW,document.getElementById("btnLogOut"));
    
        input.addEventListener("keypress", function(event) {
            if (event.key == "Enter") 
            {
              if (input.value == users.passwords[userIndex]) 
              {
                 alert("Le compte a été supprimer");
                 // Supprimer l'utilisateur choisi selon le input
                 users.names.splice(userIndex, 1);
                 users.passwords.splice(userIndex, 1);
                 window.localStorage.setItem('userList',JSON.stringify(users));
                    
                 //Re-initisier la bloc de Supprimer le compte
                 Displaying.CacherID(input,verifPassW,document.getElementById("btnLogOut"));
              } 
              else 
              { alert("password incorrecte");  }
            }
        });
    } 
    else 
    {  invalMsg.innerHTML = "Utilisateur n'existe pas <br/>";  } //msg d'invalidité
    //important D'INSERER le .innerHTML ici > sinon, fonctionne pas

    ///verification dans console si localstorage fonctionne bien
    const local = new accManaging();
    const list = local.checkStorage();
    console.log(list);
}

/* Function qui va valider le Log In dans la Section Titre */
function connexionUser() 
{
    //Prend infos du tableau dans LocalStorage
    let users = JSON.parse(localStorage.getItem('userList'));
    // nombres de users dans JSON  (Max users) 
    let listMax = Number(users.names.length);
    let LogIn = new accManaging();

    let Nom = document.frmLogIn.Nom; //formName + InputName + .value
    let Password = document.frmLogIn.PassW;
    //Variables qui affiche la date courante
    let msgMember = document.getElementById("membre");
    let msg = document.getElementById("message");
 
    //button de deconnexion
    let Outbutton = document.getElementById("btnLogOut");

    //Liste deroulate qui cherche tous les users disponibles dans le JSON
    for (var i = 0; i < listMax; i++)
    {   //Si le input est disponible ou existe dans le JSON
      if( (Nom.value == users.names[i]) && (Password.value == users.passwords[i]) )
      {
        //Ouvrir le site
        alert('Bienvenue a mon site web');
        parent.frames.Menu_Frame.location.href ="indx2-MenuBar.html";
        //Cacher le form pour le LogIn 
        LogIn.CacherForm(msgMember,Nom,Password,document.getElementById("btnLogIn"));

        //Center the whole Div
        document.getElementById("uLogin").style.textAlign = "center"; 
        msg.style.fontFamily = "sans-serif";
        msg.style.padding = "10px 10px 10px 10px";
        //Inserez le nom du User
        msg.innerHTML = LogIn.AfficherDate(users.names[i]);
        Outbutton.style.display = "block"; //Montrer button deconnexion

        //Changer le contenu au Home-Page
        parent.frames.Content_Frame.location.href ="./Pages/Page-2-Bienvenue.html";
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
    let LogOut = new accManaging();
    //Variables qui affiche la date courante
    let msgMember = document.getElementById("membre");
    let msg = document.getElementById("message");
    let Outbutton = document.getElementById("btnLogOut");

    //Retour au Menu non-interractif
    parent.frames.Menu_Frame.location.href ="indx2-NoBar.html";
    parent.frames.Content_Frame.location.href ="./Pages/Page-1-Home.html";

    //Retoure aux titres de LogIn
     LogOut.AfficherForm(msgMember,Nom,Password,document.getElementById("btnLogIn"));
     //Cacher date + message dans le LogIn 
     msg.innerHTML = "";
     Outbutton.style.display = "none"; //cacher boutton logOut
}
//classes qui structures 
class accManaging 
{
    //Methode pour verification dans localstorage (test)
    checkStorage()
    {
        for (var i = 0; i < localStorage.length; i++) 
        {
            var key = localStorage.key(i); //nom du item selon index dans storage
            var value = localStorage.getItem(key); 
            return key + ": " + value;
        }
    }
    //Section LogIn: DATE
    AfficherDate(nom)
    {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1; //index 0
        const day = date.getDate();

        return " <b> Bienvenue " + nom + "! Profitez d'acheter un livre <br/>" + 
        "<span style='font-size: 28px;color:darkgreen;'>" + day + "/ " + month + "/ " + year + "</b></span>";
    }

    ///Section Cacher/Afficher selon button presser
    CacherForm(message, nom, password, button)
    {
        message.style.display = "none";
        nom.style.display = "none";
        password.style.display = "none";
        button.style.visibility = "hidden";
    }
    AfficherForm(message, nom, password, button)
    {
        message.style.display = "block";
        nom.style.display = "block";
        password.style.display = "block";
        button.style.visibility = "visible"; 
    }
}