
///creer des fonctions events par rapport a ce qui a dans le HTML (window.onload)
function hover(id) 
{
    let Canvas = document.getElementById("Board");
    /* Functions Active tout le Board */
    if (id == "allGenres") 
    {
           Canvas.src = './Img/Mapping/Bookshelf-2-ActiveNoFlags.png'; 
    } 
    else if (id == "allFlags")    
    {
        Canvas.src = './Img/Mapping/Bookshelf-3-ActiveAllFlags.png';
    } 
    /* Functions Active drapeaux */
    else if (id == "frenchFlag")    
    {
        Canvas.src = './Img/Mapping/Bookshelf-3a-French.png';
    } 
    else if (id == "englishFlag")    
    {
        Canvas.src = './Img/Mapping/Bookshelf-3b-English.png';
    } 
    else if (id == "spanishFlag")    
    {
        Canvas.src = './Img/Mapping/Bookshelf-3c-Spanish.png';
    } 
    /* Functions Active livres */
    else if (id == "gnrSciFi" || id == "gnrFant" || id == "gnrHist" || id == "gnrRealsm" || id == "gnrKids")    
    {
        Canvas.src = './Img/Mapping/Bookshelf-2-ActiveNoFlags.png';
    } 
}

function unhover() 
{
    let Canvas = document.getElementById("Board");
    Canvas.src = './Img/Mapping/Bookshelf-1-NonActive.png';
}
//A changer
function Show()
{
    let Table = document.getElementById('BS');
    Table.style.visibility = "visible";
    document.getElementById('TitleBestSells').style.visibility = "visible";
}
function Popup(Text)
{
    alert(Text);
}
function AccesP4()
{
    this.location.href ="Page-4-Recherches.html";
}
function AccesP5()
{
    this.location.href ="Page-5-Achats.html";
}
