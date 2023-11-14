var dropdown =document.querySelector('.dropdown' );
var btn =document.querySelector('.dropdown .btn span' );


dropdown.addEventListener("click", function(e) {
    btn.style.color="rgb(255, 182, 72)" ;
   
  
})
dropdown.addEventListener("mouseleave", function(e) {
    btn.style.color="black" ;
   
  
})
dropdown.addEventListener("dblclick", function(e) {
    btn.style.color="black" ;
   
  
})