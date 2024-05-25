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
    for(i = 0; i < objects.length; i++){
        document.getElementById("object_count").innerHTML = objects.length + " objects found";

        fill("#ff2222");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        
        noFill();
        stroke("#ff2222");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        if(objects[i].label == input){
            video.stop();
            objectDetector.detect(gotResults);
            document.getElementById("status").innerHTML = "Object mentioned found";
            speech = window.speechSynthesis;
            utterThis = new SpeechSynthesisUtterance("Object mentioned found");
            speech.speak(utterThis);
        }
        else{
            document.getElementById("status").innerHTML = "Object mentioned not found";
        }
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log('Model successfully loaded!');
    status = true;
}