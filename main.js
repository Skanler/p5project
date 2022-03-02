function preload(){

}

function setup(){
canvas = createCanvas(600, 600);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
}

function draw(){
image(video, 160, 160, 300, 300);
rect(20, 20, 500, 20);
fill(0, 255, 0);
circle(30, 30, 50);
fill(255, 0 , 0);
}