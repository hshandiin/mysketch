var circleX=0;
var col = 0;
var r =0;
var b = 255;
function runCode() {
    alert("Have a nice day!");
}



let img;
let img2;

function preload() {
    img = loadImage('navajoseal.png');  
    img2 = loadImage('navajo_basket.png');
    img3 = loadImage('mv.png');
}

//reminder that setup runs only once
function setup() {
    createCanvas(600, 400);
    background(255, 186, 186);

}

function draw(){

    r=map(mouseX,0,600,0,255);
    b=map(mouseX,0,600,255,0);
    background(r,0,b);
    
//  NN seal
    image(img,200,50);

    //baskets
    image(img2,0,0,50,50);
    image(img2,550,0,50,50);
    image(img2,550,350,50,50);
    image(img2,0,350,50,50);
    //mv
    image(img3,150,200,300,300);

    rect(400, 400, 100, 100);

    fill(28, 112, 142)
   ellipse(mouseX,mouseY,20,20);

circleX = circleX + 1;

 
}

//function mousePressed(){








