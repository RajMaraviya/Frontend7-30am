function add()
{
    var a = parseInt(document.getElementById('add-a').value);
    var b = parseInt(document.getElementById('add-b').value);
    var c = a+b;
    document.getElementById("ad").innerHTML="adition is : "+c;
}
function sub()
{
    var a = parseInt(document.getElementById('add-a').value);
    var b = parseInt(document.getElementById('add-b').value);
    var c = a-b;
    document.getElementById("su").innerHTML="Substraction is : "+ c;
}
function mul()
{
    var a = parseInt(document.getElementById('add-a').value);
    var b = parseInt(document.getElementById('add-b').value);
    var c = a*b;
    document.getElementById("mu").innerHTML="Multiplication is : "+ c;
}
function div()
{
    var a = parseInt(document.getElementById('add-a').value);
    var b = parseInt(document.getElementById('add-b').value);
    var c = a/b;
    document.getElementById("di").innerHTML="Division is : "+ c;
}

export {add, sub, mul, div};