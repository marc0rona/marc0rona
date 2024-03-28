//JQUERY
$(document).ready(function()
   {  
    $("#show2").hide();
/* fonction qui creer l'animation des drapeaux */
    $("#show1").mouseover
        (function() //Quand on hover sur drapeau
            {
                $("#show1").hide();
                $("#show2").show();
            }
        );

    $("#show1").mouseout
        (function() //Quand on hover sur drapeau
            {
                $("#show1").show();
                $("#show2").hide();
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