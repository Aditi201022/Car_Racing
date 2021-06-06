canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;
car1_image = "car1_png";

car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 10;
car2_image = "car2_jpg";


function add(){
   background_imgTag = new Image();
   background_imgTag.onload = uploadBackground;
   background_imgTag.src = background_image;

   car1_imgTag = new Image();
   car1_imgTag.onload = uploadcar1;
   car1_imgTag.src = car1_image;

   car2_imgTag = new Image();
   car2_imgTag.onload = uploadcar2;
   car2_imgTag.src = car2_image;
   
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
    

    function uploadcar2(){
          ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
    }

window.addEventListener("keydown", myKeydown);
function myKeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
        console.log("up arrow key");
    }  

    if (keyPressed == "40") {
        down();
        console.log("down arrow key");
    }  
    
    if (keyPressed == "37") {
        left();
        console.log("left arrow key");
    } 
    
    if (keyPressed == "39") {
        right();
        console.log("right arrow key");
    }  

    if (keyPressed == "89") {
        car2_up();
        console.log("w arrow key");
    }  

    if (keyPressed == "65") {
        car2_left();
        console.log("a arrow key");
    }  

    if (keyPressed == "85") {
        car2_down();
        console.log("s arrow key");
    }  

    if (keyPressed == "68") {
        car2_right();
        console.log("d arrow key");
    }  
    
}
