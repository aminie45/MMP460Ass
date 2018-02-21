$(document).ready(function(){
    console.log("index.js is ready");
});


/**whenever mouse moves on our website, print out mouseX position in the console**/
//$(document).mousemove(function (){
    //console.log("my mouseX position is"+ event.pageX);
    
    //document.getElementById("debug").innerHTML = "mouseX position: "+event.pageX+"mouseY position: "event.pageY"

$(window).resize(function (){
    document.getElementById("debug").innerHTML = "my current window width is"+ $(window).width();   
});
    
//when our mouse moves within the 200px wide rightmost area....on the website, push menu bar left by 400px.
//when mouse leaves this rightmost area, push the menu bar right by 400px.

$(document).mousemove(function (){
    if($(window).width()-event.pageX < 200){
       $(".menu").css("right", "0");
}else{
    $(".menu").css("right", "-300");
}
});