var time = 0;

function setup() {
  createCanvas(600,600);
  background(180);
}

function draw() {
  
  background(0);
  
  time = time + 0.05;
  var x = 25;
  var y = 25;
  
  noStroke();
  fill(255,80);
  translate(300,300);
  rotate(time/50);
  translate(-300,-300)
  
  while(x<width){
  var d = dist(x,y,width/2,height/2);
  var s = map(sin(d/100 + time * 3), -1,1,0,75);
  
    
  rect(x,y,s,s);
  y=y+50
  
  if (y>height){
    y=25;
    x=x+50;
  }
  
}
}