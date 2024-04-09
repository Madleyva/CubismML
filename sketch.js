let slider;
let x = 443;
let y = 282;
let clicked = false;


function setup() {
  createCanvas(1000, 1000);
  //code for slider
  slider = createSlider (0, 255, 0, 50);
  slider.position(280, 10);
  slider.size(100);

  
}

function draw() {
  background(220);
  //slider
  let g = slider.value();
  fill('red')
  background (g);

  


  stroke(0); 
  strokeWeight(1); 

  //first arch
  fill('orange')
  beginShape();
  vertex(320, 661);
  vertex(321, 104);
  //vertex1
  bezierVertex(321 - 115, 104 - 8, 321 - 212, 104 + 79, 321 - 219, 104 + 180);
  //vertex2
  bezierVertex(321 - 219 - 6, 104 + 180 + 109, 321 - 219 - 6 + 93, 104 + 180 + 109 + 214, 321 - 219 - 6 + 94 + 220, 104 + 180 + 110 + 220 + 6);
  endShape();
  

  //line dividing the art
  fill('yellow')
  rect(292, 176, 29, 222);
  fill('red')
  rect(292, 398, 29, 263);
 
  //Top shape
  fill('lightblue')
  beginShape();
  vertex(321, 176);
  bezierVertex(321 + 164, 176 - 11, 321 + 246, 176 + 67, 321 + 160, 276 + 250);
  vertex(322, 400);
  endShape();

  if (clicked){
    x +=1;
    y += random(-1,1);
    
    if (x > width + 12){
      x = -12;
    }
  }
  

  //Black circle
  fill('black')
  ellipse( x, y, 24, 25);

  /*fill('lightsalmon');
beginShape();
curveVertex(322, 398); // Start with curveVertex instead of vertex
curveVertex(322 + 159, 398);
curveVertex(322 + 259 - 8, 198 + 282);
curveVertex(322 + 259 - 8 - 150, 398 + 259);
curveVertex(322 + 259 - 259, 398 + 263);
curveVertex(322, 398);
endShape();*/


   //Bottom arch 
  fill('salmon')
  beginShape();
  vertex(322, 398);
  vertex(322 + 259, 398);
  vertex(322 + 259 - 8, 198 + 282);
  vertex(322 + 259 - 8 - 200, 398 + 259);
  vertex(322 + 259 - 259, 398 + 263);
  vertex(322, 398);
  endShape();

  //Top line
  fill('black')
  rect(120, 552, 200, 10)
  //Bottom line
  fill('darkred')
  rect(185, 600, 136, 30)

//Shape of the left side of the house
  fill('yellow')
  beginShape();
  vertex(308, 721);
  vertex(186, 795);
  vertex(186, 948);
  vertex(308, 948);
  endShape(CLOSE);

//Shape of the black side of the house,right side
fill('black')
  beginShape();
  vertex(308, 721);
  vertex(308, 948);
  vertex(451, 948);
  vertex(451, 909);
  vertex(379, 909);
  vertex(379, 876);
  vertex(467, 876);
  vertex(467, 834);
  vertex(366, 834);
  vertex(366, 783);
  vertex(443, 783);
  endShape(CLOSE);
}

function mouseClicked(){
  let d = dist(mouseX, mouseY, x, y);
  if(d < 12.5){
    clicked = !clicked;
  }
}
