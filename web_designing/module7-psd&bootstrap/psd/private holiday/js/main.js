var a;
function loader(){
    a=setTimeout("load()",2000);
}
function load(){
    document.getElementById("body").style="border: 2px double #535353";
    document.getElementById("loader").style="display: none";
    document.getElementById("mainPage").style="display: block";
}