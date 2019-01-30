function setup()
{
  createCanvas(700,500);

}

function draw()
{
	background(3,255,70)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(214,255,3);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(424,245,2);

	// modifies the thickness of the border of an object
	strokeWeight(20);


	rect(0,0,140,50);
	rect(0,100,140,50);


	fill(255,3,180);
	stroke(37,3,255);
	strokeWeight(20);

	rect(150,0,100,50);
	rect(150,100,100,50);
  rect(150,200,100,50);


}
