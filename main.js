song1="";
song2="";

function preload(){
    song1=loadSong("spot!.mp3");
    song2=loadSong("crazyform.mp3");
}

function setup(){
    canvas=createCanvas(600, 400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 400);
}