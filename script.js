function preload(){

}
function setup(){
    canvas = createCanvas(1000,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,400,250,200,100);

    fill(175,0,0);
    rect(30,200,920,20);

    fill(175,0,0);
    rect(30,400,920,20);

    fill(175,0,0);
    rect(30,200,20,200);

    fill(175,0,0);
    rect(950,200,20,200);

    fill(0,175,0)
    circle(30,200,30);

    fill(0,175,0)
    circle(950,200,30);

    fill(0,175,0)
    circle(30,400,30);

    fill(0,175,0)
    circle(950,400,30);
}