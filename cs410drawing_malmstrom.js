
// Tyrus Malmstrom
// cs 410
// JavaScript for Project 2.


function init() {
	dboard = document.getElementById("dboard");
	cntxt = dboard.getContext('2d');
	var board_width = dboard.width;
	console.log("The width of the board is: " + board_width);
	var board_height = dboard.height;
	console.log("The height of the board is: " + board_height);

	cntxt.save();
	cntxt.setTransform(board_height, 0.0, 0.0, -board_height, 0.0, board_height);
	cntxt.lineWidth=0.01;
	cntxt.restore();

	draw_css_rectangle();
}

// All my code: (9/19/16)

// 'class' for creating a rectangle;
function make_rectangle(x, y, width, height, fillColor, lineColor){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.fillColor = fillColor;
	this.lineColor = lineColor;
}

function draw_css_rectangle(){

	for(var i = 0; i < 32; i++){
		draw_rectangle();
		cntxt.transform(0.66, 0.0, 0.0, 0.66, 0.33, 0.33);
	}

}

function draw_rectangle(){
	cntxt.fillStyle = "DarkGreen";
	cntxt.strokeStyle = "DarkGrey";
	cntxt.rect(0, 0, 0.5, 0.5);
	cntxt.fill();
	cntxt.stroke();
}




// function drawIt() {
// 	for (i = 0; i < 32; i++) {
//        drawBox();
// 	   cntxt.transform(0.66, 0.0, 0.0, 0.66, 0.33, 0.33);
// 	}
// }
//
// function drawBox() {
// 	cntxt.fillStyle   = "DarkGreen";
// 	cntxt.strokeStyle = "DarkGrey";
// 	cntxt.rect(0, 0, 0.5, 0.5);
//     cntxt.fill();
//     cntxt.stroke();
// }
//
// function init() {
// 	dboard = document.getElementById("dboard");
// 	cntxt  = dboard.getContext('2d');
// 	w = dboard.width;
// 	h = dboard.height;
// 	cntxt.setTransform(w, 0.0, 0.0, -h, 0.0, h);
// 	cntxt.lineWidth=0.01;
// 	drawIt();
// }
