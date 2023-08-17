var cofee_1 = document.getElementById("img-1");
var cofee_2 = document.getElementById("img-2");
var cofee_3 = document.getElementById("img-3");

cofee_1.addEventListener("mouseover",() =>{
    // console.log(document.getElementById("span"))
    document.getElementById("span").style.color = "rgb(70, 141, 70)";
    document.getElementById("right-img").src = "asset/img1.png";
    document.getElementsByClassName("background")[0].style.backgroundColor = "rgb(70, 141, 70)"
    document.getElementById("button").style.backgroundColor = "rgb(70, 141, 70)";

    
});
cofee_2.addEventListener("mouseover",() =>{
    // console.log(document.getElementById("span"))
    document.getElementById("span").style.color = "#CDB7A9";
    document.getElementById("right-img").src = "asset/img2.png";
    document.getElementsByClassName("background")[0].style.backgroundColor = "#CDB7A9";
    document.getElementById("button").style.backgroundColor = "#CDB7A9";

});
cofee_3.addEventListener("mouseover",() =>{
    // console.log(document.getElementById("span"))
    document.getElementById("span").style.color = "#C53E9F";
    document.getElementById("right-img").src = "asset/img3.png";
    document.getElementsByClassName("background")[0].style.backgroundColor = "#C53E9F";
    document.getElementById("button").style.backgroundColor = "#C53E9F";


    
});