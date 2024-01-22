console.log("hii js");
let h1=document.getElementById("h1");
console.log(h1);

h1.innerText="hii i am cuteBoy";
h1.innerHTML="hiii im am cuteB";

//! different betweent innerText and innerhTML
let para=document.getElementById("para");
console.log(para);
para.innerText="<a href='#'>Link</a>";

let para1=document.getElementById("para1");
console.log(para1);
para1.innerHTML="<a href='#'>Link</a>";

//!
function cuteBoy(){
    let head=document.getElementById("head");
    head.innerHTML +="🤔Hii i am Monkey";
}

function smile(){
    let smile=document.getElementById("smile");
    smile.innerHTML +="smile please 😴";
}

//! Keyboard
let user=document.getElementById("user");
console.log(user);

user.addEventListener("keyup",()=>{
    user.style.background="red";
    user.style.color="white";
    user.style.fontSize="30px";
})

user.addEventListener("keydown",()=>{
    user.style.background="yellow";
    user.style.color="white";
    user.style.fontSize="30px";
})