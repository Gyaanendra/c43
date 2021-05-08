var bg,bg2,form,system,code,security , Security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2=loadImage("treasure.jpg")
  
  //load image for the treasure background
  
}





function setup() {
  createCanvas(1000,500);
  //security = new Security();
  //system = new System();
  
  
}

function draw() {
  background(bg);
  clues();
  //security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  


  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}


const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";

function clues() {
    
    fill("white")
    textSize(15)
    text("R E V B A I L A", 100,50)
    fill("lightblue")
    text("Hint: Always changing, not constant !!", 100,70)
// add code for displaying rest of the names and the hints.
    
fill("white")
textSize(15)
text("N C I O F U T N", 700,150)
fill("lightblue")
text("Hint: Performs tasks.", 700,170)

fill("white")
textSize(15)
text(" S D B A T E A A", 100,250)
fill("lightblue")
text("Hint: Stores Data.", 100,270)
}