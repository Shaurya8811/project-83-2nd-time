canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car2_width=100;
car2_height=90;
car2_x=10;
car2_y=10;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=100;
car1_height=90;
car1_x=10;
car1_y=10;


background_image="racing img.jpg";
car2_image="carimg2.png";
car1_image="carimg.png";

function add()
{
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar;
car2_imgTag.src = car2_image;
car1_imgtag.src = car1_image;
}

function uploadBackground()
{
ctx.drawImage(background_imgTag, 0, 0, canvas.width , canvas.height);
}

function uploadBackground()
{
ctx.drawImage(background_imgTag, 0, 0, canvas.width , canvas.height);
}

function uploadcar2()
{
ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width , car2_height);
}

function uploadcar1()
{
ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width , car1_height);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log("keyPressed");
if (keyPressed == '38')
{
up();
console.log
}
}



