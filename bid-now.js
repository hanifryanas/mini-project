function bidNow(){
    if(document.getElementById("login-id").value=="true"){
        let updatePrice = document.getElementById("mdl-harga-1").value;
        document.getElementsByClassName("prices")[0].innerHTML=updatePrice;
    }
    else{
        alert("sorry you have to login first");
    }
}