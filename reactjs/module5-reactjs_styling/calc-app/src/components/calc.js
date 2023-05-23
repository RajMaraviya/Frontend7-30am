let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})



// let a = parseInt(prompt("Enter value A"));
// let b = parseInt(prompt("Enter value b"));


// function add()
// {
//     let c = a+b;
//     alert("addition of a and b", c);
// }
// function sub()
// {
//     let c = a-b;
//     alert("substraction of a and b", c);
// }
// function mul()
// {
//     let c = a*b;
//     alert("multiplication of a and b", c);
// }
// function div()
// {
//     let c = a/b;
//     alert("division of a and b", c);
// }
// export {add, sub, mul, div}