function addPrices1(initialPrice){
    // for(let i=0;i<document.getElementsByClassName("price-on-modal").length;i++){
    //     if(document.getElementsByClassName("price-on-modal")[i].innerHTML!=""){
    //         let price = document.getElementsByClassName("price-on-modal")[i].innerHTML;
    //         price = parseInt(price.slice(2,price.length));
    //         price = price.split('.').join("");
    //         console.log(price);
    //         document.getElementsByClassName("prices-on-modal")[i].innerHTML=price;
    //     }
    // }
    initialPrice = initialPrice.slice(2,initialPrice.length);
    initialPrice = initialPrice.split('.').join('');
    initialPrice = parseInt(initialPrice);
    let price = document.getElementsByClassName("price-on-modal")[0].value;
    price = price.slice(2,price.length);
    price = price.split('.').join('');
    let price2 = parseInt(price)+500000;
    price=price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    document.getElementsByClassName("price-on-modal")[0].value="Rp "+price;
    if(initialPrice<price2){
        document.getElementById("button-minus1").removeAttribute('disabled');
    }
    else{
        document.getElementById("button-minus1").disabled=true;
    }
}
function subsPrices1(initialPrice){
    initialPrice = initialPrice.slice(2,initialPrice.length);
    initialPrice = initialPrice.split('.').join('');
    initialPrice = parseInt(initialPrice);
    let price = document.getElementsByClassName("price-on-modal")[0].value;
    price = price.slice(2,price.length);
    price = price.split('.').join('');
    let price2 = parseInt(price)-500000;
    price=price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    document.getElementsByClassName("price-on-modal")[0].value="Rp "+price;
    if(initialPrice<price2){
        document.getElementById("button-minus1").removeAttribute('disabled');
    }
    else{
        document.getElementById("button-minus1").disabled=true;
    }
}

function addPrices2(initialPrice){
    initialPrice = initialPrice.slice(2,initialPrice.length);
    initialPrice = initialPrice.split('.').join('');
    initialPrice = parseInt(initialPrice);
    let price = document.getElementsByClassName("price-on-modal")[1].value;
    price = price.slice(2,price.length);
    price = price.split('.').join('');
    let price2 = parseInt(price)+500000;
    price=price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    document.getElementsByClassName("price-on-modal")[1].value="Rp "+price;
    if(initialPrice<price2){
        document.getElementById("button-minus2").removeAttribute('disabled');
    }
    else{
        document.getElementById("button-minus2").disabled=true;
    }
}
function subsPrices2(initialPrice){
    initialPrice = initialPrice.slice(2,initialPrice.length);
    initialPrice = initialPrice.split('.').join('');
    initialPrice = parseInt(initialPrice);
    let price = document.getElementsByClassName("price-on-modal")[1].value;
    price = price.slice(2,price.length);
    price = price.split('.').join('');
    let price2 = parseInt(price)-500000;
    price=price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    document.getElementsByClassName("price-on-modal")[1].value="Rp "+price;
    if(initialPrice<price2){
        document.getElementById("button-minus2").removeAttribute('disabled');
    }
    else{
        document.getElementById("button-minus2").disabled=true;
    }
}