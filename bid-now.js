function bidNow1(){
    let x = document.getElementById("login-id").innerHTML;
    if(x!="Login/Register"){
        let updatePrice = document.getElementById("mdl-harga-1").value;
        document.getElementsByClassName("prices")[0].innerHTML=updatePrice;
    }
    else{
        alert("sorry you have to login first");
    }
    
}
function bidNow2(){
    let x = document.getElementById("login-id").innerHTML;
    if(x!="Login/Register"){
        let updatePrice = document.getElementById("mdl-harga-2").value;
        document.getElementsByClassName("prices")[1].innerHTML=updatePrice;
    }
    else{
        alert("sorry you have to login first");
    }
    
}