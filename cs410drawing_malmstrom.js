// Tyrus Malmstrom
// cs 410
// JavaScript for Project 2.

// All my code: (9/19/16)
var context;
function init() {
    var dboard = document.getElementById("dboard");
		context = dboard.getContext('2d');
    var board_width = dboard.width;
    console.log("The width of the board is: " + board_width);
    var board_height = dboard.height;
    console.log("The height of the board is: " + board_height);
    context.setTransform(board_height, 0.0, 0.0, -board_height, 0.0, board_height);
    context.lineWidth = 0.004;
    drawThings();
}

function drawThings(){
	drawCss_rect();
  drawTriangle();
}

// 'class' for creating a rectangle;
function makeShape(x, y, width, height, fill, line) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fill = fill;
    this.line = line;
}

function draw_rectangle() {
    var rect = new makeShape(0.0, 0.0, 0.125, 0.125, "#BCED91", "DarkRed");
    context.fillStyle = rect.fill;
    console.log("The fill styel is: " + rect.fill);
    context.strokeStyle = rect.line;
    console.log("The stroke style is: " + rect.line);
    context.rect(rect.x, rect.y, rect.width, rect.height);
    context.fill();
    context.stroke();
}

function drawCss_rect(){

  for(var i = 0; i < 32; i++){
    draw_rectangle();
    context.transform(0.66, 0.0, 0.0, 0.66, 0.25, 0.33);
  }

}

// I am resuing my code that I wrote when I was in CT310 :: This draws a hazard sign.
function drawTriangle() {

    // going to draw a triangle:
    var width =  0.125; // Triangle Width
    var height = 0.125; // Triangle Height
    var padding = .0625;

    var dim = document.getElementById('dboard');
    // grabbing the width of the canvas element:
    var cWidth = dim.width;
		console.log("Triangle --> width = " + cWidth);
    // grabbing the height of the canvas element:
    var cHeight = dim.height;
		console.log("Triangle --> height = " + cHeight);
    // Draw a path
    // the beginPath() method begins a path, or resets the current path
    context.beginPath();
    context.moveTo( -(padding + width / 2), -padding); // Top Corner
    context.lineTo( padding + width, height + padding); // Bottom Right
    context.lineTo(padding, -height + padding); // Bottom Left
    context.closePath();

    // Fill the path
    context.fillStyle = "#ffc821";
    context.fill();

    // Create fill gradient
    // var gradient = context.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#ffc821");
    gradient.addColorStop(1, "#faf100");

    // Fill the path
    context.fillStyle = gradient;
    context.fill();

    // adding a backgound box shadow!
    context.shadowBlur = 10;
    context.shadowColor = "black";

    // Stroke the inner outline
    context.lineWidth = 0.005; // thickness of the line
    context.lineJoin = "round"; // makes the intersection of two lines rounded
    context.strokeStyle = "#333"; // The strokeStyle property sets or returns the color, gradient, or pattern used for strokes.
    context.stroke();

    // addinga text element to the sign!
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 60px 'Monospace', Times, serif";
    context.fillStyle = "#333";
    try {
        context.fillText("!", 0.5, 0.5);
    } catch (ex) {
        console.log("You for some reason could not fill in the text...");
    }

}
