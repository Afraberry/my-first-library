var moving, fixed;
var rect1, rect2, rect3, rect4;


function setup() {
  createCanvas(600, 600);
  moving = createSprite(10, 300, 40, 60);
  fixed = createSprite(300, 300, 60, 60);

  rect1 = createSprite(150, 150, 50, 50);
  rect2 = createSprite(250, 150, 50, 50);
  rect3 = createSprite(350, 150, 50, 50);
  rect4 = createSprite(450, 150, 50, 50);

  moving.shapeColor = "pink";
  fixed.shapeColor = "white";

  rect1.shapeColor = "orange";
  rect2.shapeColor = "orange";
  rect3.shapeColor = "orange";
  rect4.shapeColor = "orange";

  moving.velocityX=10;
}

function draw() {
  background("black");



  // calling the function: arguments
  
  if (isTouching(moving, fixed))  {
    moving.shapeColor = "red";
    fixed.shapeColor = "yellow";
  } else {
    moving.shapeColor = "pink";
    fixed.shapeColor = "white";
  }

  if(isTouching(rect1, moving)) {
    rect1.shapeColor = "purple";
  } else{
    rect1.shapeColor = "orange";
  }

  if(isTouching(rect2, moving)) {
    rect2.shapeColor = "purple";
  } else{
    rect2.shapeColor = "orange";
  }

  if(isTouching(rect3, moving)) {
    rect3.shapeColor = "purple";
  } else{
    rect3.shapeColor = "orange";
  }

  if(isTouching(rect4, moving)) {
    rect4.shapeColor = "purple";
  } else{
    rect4.shapeColor = "orange";
  }

  bounce(moving,fixed);


  drawSprites();
}


