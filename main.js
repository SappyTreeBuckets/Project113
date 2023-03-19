function preload(){
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    circle(50,50,90);
    circle(590,50,90);
    circle(50,430,90);
    circle(590,430,90);
}
function draw(){
}
function take_snapshot(){
    save("student_name.png")
}