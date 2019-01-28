/*
Task 4 - Further learn about how fill and rect functions work by putting a rectangle exactly in the top left,
        top right, bottom left and bottom right corners of the screen and also 1 rectangle in the middle.
        Try to apply your algebraic knowledge of the canvas size to do this.
*/


function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(500,500);

}

function draw()
{
  //create a background using RGB values
  background(9,255,0)

  // change the paint brush to a specific color according to RGB values
  fill(49,128,137);


  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(0,0,10,20);
  rect(489,0,10,20);
  rect(250-50/2,250-50/2,50,50);
  rect(489,479,10,20);
  rect(0,479,10,20);




}
