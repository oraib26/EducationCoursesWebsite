var header=document.querySelector("header");
var nav=document.querySelector("nav");
var nums=document.querySelectorAll(".register .num");
let section = document.querySelector(".register");
let started = false; 
let headerContentSpan = document.querySelector(".bg-header .content-header span")
let navbar = document.querySelector(".navbar")
const loading=document.querySelector(".loading");
let box2 = document.querySelector(".box2")
let onlineCources = document.querySelector(".online-cources")



window.onscroll = function () {
   if (window.scrollY >= section.offsetTop) {
     if (!started) {
       nums.forEach((num) => startCount(num));
     }
     started = true;
   }
 };


function startCount(el) {
   let goal = el.dataset.goal;
   let count = setInterval(() => {
     el.textContent++;
     if (el.textContent == goal) {
       clearInterval(count);
     }
   }, 2000 / goal);
 }


//  ----------------------------------------------------------------

window.addEventListener('load',function(){
  setTimeout(function(){
    loading.classList.add('opacity-0', 'invisible');

  },2000)

})

window.addEventListener('scroll',function(){
  if(window.scrollY>headerContentSpan.offsetTop){
    navbar.style.backgroundColor="#FFFFFF";
  }
  else{
    navbar.style.backgroundColor="transparent";
  }
  if(window.scrollY>onlineCources.offsetTop){
    box2.classList.remove('opacity-0', 'invisible');
  }
  else{
    box2.classList.add('opacity-0', 'invisible');
  }


 

})

box2.addEventListener('click',function(){
  window.scroll({
    top:0,
    behavior:"smooth"
  })


})



