function setup() {
  createCanvas(800,800);
  background(200);
  // put setup code here

   // put drawing code here
   noStroke()

   //grootste gebouw in het midden
   fill(255,0,127);
   rect(400, 100, 300,700);
 
    fill(255,153,204);
  rect(550, 100, 150,700);
 
 //grootste gebouw in het midden details
 fill(255);
 rect(420,125,250,30);
 rect(420,185,250,30);
 rect(420,245,250,30);
 rect(420,305,250,30);
 rect(420,365,250,30);
 rect(420,425,250,30);
 rect(420,485,250,30);
 rect(420,545,250,30);
 rect(420,605,250,30);
 rect(420,665,250,30);
 
 //schaduw
 fill(0,0,0,50);
 rect(500,600,15,200);
 
 
 
    //kleine gebouw in het midden
    fill(255,153,204);
    rect(300, 600, 200, 200);
 
 
   // linkergebouw met schoorsteen
   //basisvierkant
   fill(255,0,127);
  rect(20,200,300,650);
 
  stroke(255);
  strokeWeight(2);
  fill(255,0,127);
  ellipse(670, 500, 150, 150);
 
 
  
  //rechter gebouw onderin
  noStroke();
  fill(255,0,127);
  rect(550,500,225,350);
  
 
 
 
   //linkergebouw met schoorsteen
 
   //schoorsteen
   fill(255);
   rect(210,150,100,50);
 
   //bovenste streep
   rect(40,220,250,20);
 
   //middelste strepen
   rect(10,260,325,40);
   rect(10,320,325,40);
 
   //kleine raampjes
   //bovenste rij
   fill(255);
   rect(75,400,40,45);
   rect(125,400,40,45);
   rect(175,400,40,45);
   rect(225,400,40,45);
 
   //middelste rij
   rect(75,475,40,45);
   rect(125,475,40,45);
   rect(175,475,40,45);
   rect(225,475,40,45);
 
   //onderste rij
   rect(75,550,40,45);
   rect(125,550,40,45);
   rect(175,550,40,45);
   rect(225,550,40,45);
 
   //onderste streep
   rect(40,770,250,30);
 
 
 
 
   // kleine gebouw in het midden details
   fill(255);
   rect(320,600,180,25);
   rect(320,660,160,25);
   rect(320,720,160,25);
   rect(320,780,160,25);
 
   fill(0,0,0,50);
   rect(320,600,15,200);
 
 
   
  // rechtergebouw details
     //horizontale streep bovenin  
     fill(255);
     rect(550,500,225,20);
 
     rect(575,550,30,225);
     rect(625,550,30,225);
     rect(675,550,30,225);
     rect(725,550,30,225);
 
     fill(0,0,0,50)
     rect(535,500,15,400);
 
     
 
 
     fill(0);
     text("Gemaakt door: Ilse Beeren",50,50);
 
 

  
}

function draw() {
 
}