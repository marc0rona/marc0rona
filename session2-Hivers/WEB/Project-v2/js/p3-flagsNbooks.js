
///creer des fonctions events par rapport a ce qui a dans le HTML (window.onload)
function hover(id) 
{
    let Canvas = document.getElementById("Board");
    if (id == "frenchFlag" || id == "allGenres") 
    {
           Canvas.src = './Img/Bookshelf-Test2-FlagAnimation.png';
    } 
    else if (id == "englishFlag" || id == "allFlags")    
    {
        Canvas.src = './Img/Test3.png';
    } 
    else if (id == "gnrSciFi" || id == "gnrFant" || id == "gnrHist" || id == "gnrRealsm" || id == "gnrKids")    
    {
        Canvas.src = './Img/Test4.png';
    } 
}

function unhover() 
{
    let Canvas = document.getElementById("Board");
    Canvas.src = './Img/Bookshelf-Test1.png';
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