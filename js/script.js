var bullethole_counter = 0;
var delay = 8;
var interval;
$(document).ready(function(){
  loadBulletholes();
  $("body").click(function(){bullethole_counter = 0; $(".bullethole").remove();});
});

function loadBulletholes(){
  interval = setInterval(drawBullethole, delay*1000);
}

function drawBullethole(x, y){
    var x = Math.floor(Math.random()*$(window).width()+1+45);
    var y = Math.floor(Math.random()*$(window).height()+$("body").scrollTop()+1);
    $("body").append("<div class='bullethole' style='left: " + x + "px; top: " + y + "px;'><embed src='images/GunShot.mp3' hidden=true autostart=true loop=false></div>");
    bullethole_counter++;
}
