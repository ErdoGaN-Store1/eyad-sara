const PASSWORD = "Love";
const START_DATE = new Date("2026-06-01T00:00:00");

function login(){
  const input=document.getElementById("password");
  const error=document.getElementById("error");
  if(input.value === PASSWORD){
    document.getElementById("login").classList.add("hidden");
    document.getElementById("site").classList.remove("hidden");
    updateCounter();
    setInterval(updateCounter,1000);
    startHearts();
  }else{
    error.textContent="كلمة المرور مش صحيحة ❤️";
    input.value="";
    input.focus();
  }
}

document.getElementById("password").addEventListener("keydown",e=>{
  if(e.key==="Enter") login();
});

function updateCounter(){
  let diff=Date.now()-START_DATE.getTime();
  if(diff<0) diff=0;
  const s=Math.floor(diff/1000);
  document.getElementById("days").textContent=Math.floor(s/86400);
  document.getElementById("hours").textContent=Math.floor((s%86400)/3600);
  document.getElementById("minutes").textContent=Math.floor((s%3600)/60);
  document.getElementById("seconds").textContent=s%60;
}

function startHearts(){
  setInterval(()=>{
    const h=document.createElement("div");
    h.className="floating-heart";
    h.textContent="♥";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(12+Math.random()*20)+"px";
    h.style.animationDuration=(4+Math.random()*4)+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),8500);
  },700);
}
