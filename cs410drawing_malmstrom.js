
function drawIt() {
	cntxt = document.getElementById("dboard").getContext('2d');
	var board_width = dboard.width;
	console.log("The width of the board is: " + board_width);
	var board_height = dboard.height;
	console.log("The height of the board is: " + board_height);
	cntxt.save();
	cntxt.setTransform(board_height, 0.0, 0.0, -board_height, 0.0, board_height);
	cntxt.lineWidth=0.01;
	cntxt.rect(0.2,0.2,1.0,0.6);
	cntxt.stroke();
	cntxt.restore();
}

function init() {
	drawIt();
}
