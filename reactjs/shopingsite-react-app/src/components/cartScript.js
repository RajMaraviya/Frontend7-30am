function ProductPrice(){
    var a = document.getElementById('cartItem').value;
    var b = document.getElementById('price').value * a;
    document.getElementById('sub-total').innerHTML=b;
}
function ProductPrice1(){
    var a = document.getElementById('cartItem1').value;
    var b = 799*a;
    document.getElementById('sub-total1').innerHTML=b;
}
function ProductPrice2(){
    var a = document.getElementById('cartItem2').value;
    var e = 969*a;
    document.getElementById('sub-total2').innerHTML=e;
    let x = parseInt(document.getElementById('sub-total'));
    let y = parseInt(document.getElementById('sub-total1'));
    let z = parseInt(document.getElementById('sub-total2'));
    let m = x+y+z;
    document.getElementById('cart-sub-total').value=m;
}
function CrtTotal(){
    var total = document.getElementById('');
    document.getElementById('cart-sub-total').innerHTML=total;
}

export {ProductPrice, ProductPrice1, ProductPrice2,CrtTotal}