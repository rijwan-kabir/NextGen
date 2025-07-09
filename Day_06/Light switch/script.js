let chmode=document.querySelector("#mode");
let curmode="light";
chmode.addEventListener("click",()=>{
  if(curmode==="light"){
    curmode="dark";
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("h2").style.color="white";
  }
  else{
    curmode="light";
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("h2").style.color="black";
  }
});
