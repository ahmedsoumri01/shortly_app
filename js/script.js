var inpt=document.getElementById("inpt");
var btn=document.getElementById("btn");
var short_link=document.getElementById("short_link")

function show(data) {
  console.log(data);
    let original_link=document.createElement("h3");
    original_link.innerText=data.result.original_link;
    short_link.appendChild(original_link);
    let div=document.createElement("div");
    let short=document.createElement("h3");
    let btn=document.createElement("button");
    short.innerText=data.result.full_short_link;
    btn.textContent="copie";
    div.appendChild(short);
    div.appendChild(btn);
    short_link.appendChild(div);
}
window.onload=inpt.value=""
btn.addEventListener("click",function(){
    short_link.innerHTML=""
    fetch(`https://api.shrtco.de/v2/shorten?url=${inpt.value}/very/long/link.html`)
  .then((response) => response.json())
  .then((data) => show(data));

})
var menu=document.getElementById('menu');
var ul=document.getElementsByTagName('ul');
var div=document.getElementsByTagName('div');

function myFunction(x) {
  let header=document.getElementsByTagName('header');
    if (x.matches) {  
    div[1].style.display = "none";
    ul[0].style.display = "none";
    header[0].style.display = "block";
    menu.style.display = "block ruby";
  } else {
    ul[0].classList.remove("menu_active");
  div[1].classList.remove("btn_minu");
    div[1].style.display = "flex";
    header[0].style.display = "flex";
    ul[0].style.display = "block ruby";
    menu.style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addEventListener('change',myFunction); // Attach listener function on state changes// Attach listener function on state changes
var mn_state=false;
menu.addEventListener('click',function () {
if (mn_state==false) {
 
  ul[0].style.display = "block";
  ul[0].classList.add("menu_active");
  div[1].style.display="block"
  div[1].classList.add("btn_minu");
  mn_state=true;
}else{
 
  div[1].style.display = "none";
  ul[0].style.display = "none";
  ul[0].classList.remove("menu_active");
  div[1].classList.remove("btn_minu");
  mn_state=false;
}

  });