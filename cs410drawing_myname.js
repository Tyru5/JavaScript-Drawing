
function drawIt() {
	dboard = document.getElementById("dboard");
	cntxt  = dboard.getContext('2d');
	w = dboard.width;
	h = dboard.height;
	cntxt.save();
	cntxt.setTransform(h, 0.0, 0.0, -h, 0.0, h);
	cntxt.lineWidth=0.01; 
	cntxt.rect(0.2,0.2,1.0,0.6);
	cntxt.stroke();
	cntxt.restore();
}

function init() {
	drawIt();
}
