var move = document.querySelector('.move');

var video = document.querySelector('.video');
var xmark = document.querySelector('.fa-xmark');
var body = document.querySelector('body');


move.addEventListener('click', function(e){
    video.style.cssText=`
      display: inline !important;
      left:50%;
      top:62%;
      z-index:99;
      margin: -300px 0 0 -300px;
      position: fixed !important;
      opacity:.9 !important;
      
    
    `;
    xmark.style.cssText=`
      display: inline !important;
      left:96%;
      top:120%;
      z-index:99;
      margin: -300px 0 0 -300px;
      position: fixed !important;
    
    `;


});

xmark.addEventListener('click', function(e){
    video.style.cssText=`
      display: none !important;

    `;
    xmark.style.cssText=`
      display: none !important;

    `;

});

