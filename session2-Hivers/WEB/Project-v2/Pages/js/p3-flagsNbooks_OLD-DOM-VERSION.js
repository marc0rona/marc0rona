///declaration variables 

///creer des fonctions events par rapport a ce qui a dans le HTML (window.onload)
window.onload = function() 
{   //declaration variables pour Mouse.Events
    let Canvas = document.getElementById("Board");
    let Flags = document.getElementById("allFlags");
    const French = document.getElementById("gnr-SciFi");
    const English = document.getElementById("englishFlag");
    const Spanish = document.getElementById("spanishFlag");

    //quand la souris est dessus l'area
    French.onmouseover = function() {mouseOver()};
    function mouseOver()
    {  Canvas.src = './Img/Test3.png'; }
    //quand la souris sort
    French.onmouseout = function() {mouseOut()};
    function mouseOut()
    {   Canvas.src = './Img/Bookshelf-Test1.png'; }

    //quand la souris est dessus l'area
    English.onmouseover = function() {mouseOver()};
    function mouseOver()
    {  Canvas.src = './Img/Test3.png'; }
    //quand la souris sort
    English.onmouseout = function() {mouseOut()};
    function mouseOut()
    {   Canvas.src = './Img/Bookshelf-Test1.png'; }

    //quand la souris est dessus l'area
    Spanish.onmouseover = function() {mouseOver()};
    function mouseOver()
    {  Canvas.src = './Img/Test3.png'; }
    //quand la souris sort
    Spanish.onmouseout = function() {mouseOut()};
    function mouseOut()
    {   Canvas.src = './Img/Bookshelf-Test1.png'; }

     //quand la souris est dessus l'area
     Flags.onmouseover = function() {mouseOver()};
     function mouseOver()
     {  Canvas.src = './Img/Bookshelf-Test2-FlagAnimation.png'; }
     //quand la souris sort
     Flags.onmouseout = function() {mouseOut()};
     function mouseOut()
     {   Canvas.src = './Img/Bookshelf-Test1.png'; }
}
function Popup(Text)
{
    alert(Text);
}
