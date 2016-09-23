// Tyrus Malmstrom
// cs 410
// JavaScript for Project 2.

// All my code: (9/19/16)
var context;

var dx = 0.00095;
var dy = 0.00025;
var x = 0.0;
var y = 0.025;;
var radius = 0.05;

function init() {
    context = document.getElementById("dboard").getContext('2d');
    var board_width = dboard.width;
    console.log("The width of the board is: " + board_width);
    var board_height = dboard.height;
    console.log("The height of the board is: " + board_height);
    context.setTransform(board_height, 0.0, 0.0, -board_height, 0.0, board_height);
    context.lineWidth = 0.004;
    setInterval(drawBouncingBall, 10);
    // drawThings();
}

function drawThings() {
    drawCircle();
    drawCss_rect();
}

function drawCircle() {

    var centerX1 = 1;
    var centerY1 = 0.5;
    var radius1 = 0.05;

    var centerX2 = 1;
    var centerY2 = 0.25;
    var radius2 = 0.05;

    context.beginPath();
    context.fillStyle = "Green";
    context.arc(centerX1, centerY1, radius1, 0 * Math.PI, 2 * Math.PI);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.fillStyle = "Yellow";
    context.arc(centerX2, centerY2, radius2, 0 * Math.PI, 2 * Math.PI);
    context.fill();
    context.stroke();
    context.closePath();
}

function draw_rectangle() {

    var x = 0.0;
    var y = 0.0;
    var width = 0.25;
    var height = 0.25;

    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = "Purple";
    context.strokeStyle = "Black";
    context.fill();
    context.stroke();

}

function drawCss_rect() {
    for (var i = 0; i < 32; i++) {
        draw_rectangle();
        context.transform(0.66, 0.0, 0.0, 0.66, 0.25, 0.33);
    }
}


function drawBouncingBall() {
    context.clearRect(0, 0, 600, 400);
    context.beginPath();
    context.fillStyle = "Red";
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fill();
    x += dx;
    y += dy;
    // updatea radius:
    radius -= 0.00004;
}

$(document).ready(function() {
    $('#dboard').click(function() {
        // alert("I am clicking man!");
        x = 0.0;
        y = 0.025;
        dx = 0.00095;
        dy = 0.00025;
        context.clearRect(0,0,1.5,1);
    });

});
