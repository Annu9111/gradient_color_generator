let btn1 = document.getElementById("mybutton");
let btn2 = document.getElementById("mybutton2");
let copydiv = document.querySelector(".copy-code");

let rgb1="rgb(92,145,229)";
let rgb2 ="rgb(152,63,198)";
const hexValue = ()=>{
    let myhexanum  = "0123456789abcdef";
    let colors = "#";
    for(let i=0;i<6;i++){
        colors = colors + myhexanum[Math.floor(Math.random()*16)];
    }
    return colors;
};



const handleButton1 = ()=>{
    rgb1=hexValue();
    btn1.innerText=rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`
    copydiv.innerHTML=`linear-gradient(toright,${rgb1},${rgb2})`;
};

const handleButton2 = ()=>{
    rgb2=hexValue();
    btn2.innerText =rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copydiv.innerHTML=`linear-gradient(toright,${rgb1},${rgb2}))`;
};

copydiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copydiv.innerText);
})

btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);
