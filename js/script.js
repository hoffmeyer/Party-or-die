var bullethole_counter = 0;
var delay = 8;
var interval;
$(document).ready(function(){
  loadBulletholes();
  load_clint();
  fade_in_wanted_poster();
  init_info_boxes();
});

function loadBulletholes(){
  $("body").click(function(){bullethole_counter = 0; $(".bullethole").remove();});
  interval = setInterval(drawBullethole, delay*1000);
}

function drawBullethole(x, y){
    var x = Math.floor(Math.random()*$(window).width()+1+45);
    var y = Math.floor(Math.random()*$(window).height()+$("body").scrollTop()+1);
    $("body").append("<div class='bullethole' style='left: " + x + "px; top: " + y + "px;'><embed src='images/GunShot.mp3' hidden=true autostart=true loop=false></div>");
    bullethole_counter++;
}

function fade_in_wanted_poster(){
  var delay = 1000;
  $(".fade_in").each(function(index){
    $(this).delay(delay).queue(function(n){
      $(this).animate({opacity: 1}, 1000);
      n();
    });
    delay += 3000;
  });
}

function init_info_boxes(){
  var screen_height = $(window).height();

  $(document).scroll(function() {

    var screen_center = $(document).scrollTop() + screen_height/2;

    $(".infobox").each(function(){
      var infobox_top = $(this).position().top;
      var amount_shown =  ($(document).scrollTop() + screen_height) - infobox_top;
      if(amount_shown > 0){
        var opacity_pct = amount_shown/screen_height;
      }
      $(this).css('opacity',opacity_pct);
    });
  });
}

function load_clint(){  
  $('.the_clint').delay(6000).animate({left:0},2000);
}
