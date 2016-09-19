
// Tyrus Malmstrom
// cs 410
// JavaScript for Project 2.

// All my code: (9/19/16)

// 'class' for creating a rectangle;
function makeShape(x, y, width, height, fill, line){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.fill = fill;
	this.line = line;
}

function draw_rectangle(){

	var rect = new makeShape(0.05, 0.05, 0.05, 0.05, "#BCED91", "DarkRed");
	context.fillStyle = rect.fill;
	console.log("The fill styel is: " + rect.fill);
	context.strokeStyle = rect.line;
	console.log("The stroke style is: " + rect.line);
	context.rect(rect.x, rect.y, rect.width, rect.height);

	context.fill();
	context.stroke();

}

function init() {
	context = document.getElementById("dboard").getContext('2d');
	var board_width = dboard.width;
	console.log("The width of the board is: " + board_width);
	var board_height = dboard.height;
	console.log("The height of the board is: " + board_height);
	context.setTransform(board_height, 0.0, 0.0, -board_height, 0.0, board_height);
	context.lineWidth = 0.005;

	draw_rectangle();

}
