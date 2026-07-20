let btn1 = document.getElementById("mybutton");
let btn2 = document.getElementById("mybutton2");


const handleButton1 = ()=>{
    let myhexanum  = "0123456789abcdef";
    let colors = "#";
    for(let i=0;i<6;i++){
        colors = colors + myhexanum[Math.floor(Math.random()*16)];
    }
    console.log(colors);

};

btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);
