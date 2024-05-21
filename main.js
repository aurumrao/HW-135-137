video = "";
input = "";

function preload(){
    video = createCapture(VIDEO);
    video.hide();
}

function setup(){
    canvas = createCanvas(400, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 400, 380);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
    input = document.getElementById("request").innerHTML;
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log('Model successfully loaded!');
    status = true;
}