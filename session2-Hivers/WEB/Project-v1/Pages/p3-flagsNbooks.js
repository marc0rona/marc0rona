//JQUERY
$(document).ready(function()
   {  
    $("#test2").hide();
/* fonction qui creer l'animation des drapeaux */
    $("#test1").mouseover
        (function() //Quand on hover sur drapeau
            {
                $("#test1").hide();
                $("#test2").show();
            }
        );

    $("#show1").mouseout
        (function() //Quand on hover sur drapeau
            {
                $("#test1").show();
                $("#test2").hide();
            }
        );
   }); 

   function myFunction() 
   {
       document.getElementById("show1").style.transition = "all 2s";
   }
   function Popup(Text)
   {
       alert(Text);
   }
