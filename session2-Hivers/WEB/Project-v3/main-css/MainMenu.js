//JQUERY
$(document).ready(function()
   {  
    $("#index2").hide(); //Cacher les menus non cliqués
    $("#index3").hide(); 
    $("#index4").hide();
   //Spotlight le Nav choisie
   $("#nav1").css("margin-bottom", "0px");
   $("#nav2").css("margin-bottom", "2px");
   $("#nav3").css("margin-bottom", "2px");
   $("#nav4").css("margin-bottom", "2px"); 
/* navigateur1 click fonction */
    $("#nav1").click
        (function() //Quand on clique sur Navigateur
            {
                $("#index1").show(); //Montrer la page liée au Nav
                $("#index2").hide(); //Cacher pages non-liée
                $("#index3").hide();
                $("#index4").hide();
                //Spotlight le Nav choisie
                $("#nav1").css("margin-bottom", "0px");
                $("#nav2").css("margin-bottom", "2px");
                $("#nav3").css("margin-bottom", "2px");
                $("#nav4").css("margin-bottom", "2px"); 
            }
        );
    
/* navigateur2 click fonction */
    $("#nav2").click
        (function() //Quand on clique sur Navigateur
            {
                $("#index2").show(); //Montrer la page liée au Nav
                $("#index1").hide(); //Cacher pages non-liée
                $("#index3").hide(); 
                $("#index4").hide();
                //Spotlight le Nav choisie
                $("#nav1").css("margin-bottom", "2px");
                $("#nav2").css("margin-bottom", "0px");
                $("#nav3").css("margin-bottom", "2px");
                $("#nav4").css("margin-bottom", "2px"); 
            }
        );

/* navigateur3 click fonction */
    $("#nav3").click
    (function() //Quand on clique sur Navigateur
        {
            $("#index3").show(); //Montrer la page liée au Nav
            $("#index4").hide();
            $("#index2").hide();
            $("#index1").hide();
            //Spotlight le Nav choisie
            $("#nav3").css("margin-bottom", "0px");
            $("#nav1").css("margin-bottom", "2px");
            $("#nav2").css("margin-bottom", "2px");
            $("#nav4").css("margin-bottom", "2px"); 
        }
    );
/* navigateur4 click fonction */
    $("#nav4").click
    (function() //Quand on clique sur Navigateur
        {
            $("#index4").show(); //Montrer la page liée au Nav
            $("#index3").hide();
            $("#index2").hide();
            $("#index1").hide();
            //Spotlight le Nav choisie
            $("#nav3").css("margin-bottom", "2px");
            $("#nav1").css("margin-bottom", "2px");
            $("#nav2").css("margin-bottom", "2px");
            $("#nav4").css("margin-bottom", "0px"); 
        }
    );

   }); 