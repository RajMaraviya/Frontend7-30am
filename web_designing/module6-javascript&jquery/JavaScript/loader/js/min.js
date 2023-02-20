function valid()
{
    if(document.frm.fname.value == ""){
        document.getElementById("name-error").innerHTML="Enter your name";
        document.frm.fname.focus();
        return false;
    }
    let nm = /^[A-Za-z]+$/;
    if(!nm.test(document.frm.fname.value)){
        alert("name should be always alphabetic character");
        document.frm.fname.focus();
        return false;
    }

    if(document.frm.email.value == ""){
        document.getElementById("name-error").innerHTML="Enter your name";
        document.frm.email.focus();
        return false;
    }
    let em = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!em.test(document.frm.email.value)){
        document.getElementById("email-error").innerHTML="Enter valid email address";
        document.frm.email.focus();
        return false;
    }

}