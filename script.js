let btn1 = document.getElementById("mybutton");
let btn2 = document.getElementById("mybutton2");
let copydiv = document.querySelector(".copy-code");
const hexValue = ()=>{
    let myhexanum  = "0123456789abcdef";
    let colors = "#";
    for(let i=0;i<6;i++){
        colors = colors + myhexanum[Math.floor(Math.random()*16)];
    }
    return colors;
};



const handleButton1 = ()=>{
    let rgb1=hexValue();
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},#444)`
    copydiv.innerHTML=`linear-gradient(toright,${rgb1},rgb(152,63,198))`;
};

const handleButton2 = ()=>{
    let rgb2=hexValue();
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb2},#444)`
};

btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);
