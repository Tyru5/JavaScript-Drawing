// Tyrus Malmstrom
// cs 410
// JavaScript for Project 2.

// All my code: (9/19/16)

// global canvas context:
var context;

// INSTANCE VARIABLES FOR CIRCLE ANIMATION:
var x = 0.0;
var y = 0.025;
var dx = 0.00095;
var dy = 0.00025;
var radius = 0.05;
var opacity = 1;
// END ANIMATION VARIABLES.

// VARIABLES FOR superNova
var cx = 0.0;
var cy = 1.0;
var cradius = 0.025;
// END SUPERNOVA VARIABLES

function init() {
    // initialize canvas and board:
    context = document.getElementById("dboard").getContext('2d');
    var board_width = dboard.width;
    var board_height = dboard.height;
    context.setTransform(board_height, 0.0, 0.0, -board_height, 0.0, board_height);
    context.lineWidth = 0.004;
    drawThings();
}

function drawThings() {
    // draw some other things here main:
    superNova();
    square();
    setInterval(slidingBall, 10);
}

// function that retruns a random color: (sets it using rgba() )
function arbitraryColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var aplpha = Math.random();
    var color = "rgba(" + red + "," + green + "," + blue + "," + aplpha + ")";
    return color;
}


function superNova() {
    context.beginPath();
    context.fillStyle = arbitraryColor();
    context.arc(cx, cy, 0.5, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
}

var commands = {
    explosion: function() {
        setInterval(superNova, 10);
    }
};

function square(){

  context.fillStyle = "Pink";
  context.fillRect(0.75, 0.5, 0.25,0.25);


}

function slidingBall() {
    context.clearRect(0.0, 0.0, 0.855555500000005, 0.26555555000000019); // yeah yeah i know, this is kinda bad haha
    context.beginPath();
    context.fillStyle = "rgba(255, 0 ,0 ," + opacity + ")";
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fill();
    x += dx;
    y += dy;
    // console.log("x = " + x);
    // console.log("y = " + y);
    if (x == 0.816050000000005 && y == 0.23975000000000019) {
        dx = 0.0;
        dy = 0.0;
        opacity -= 0.00055;
    } else {
        // update radius and opacity of ball:
        radius -= 0.00004;
    }

}

// adding event handler:
$(document).ready(function() {
    $('#dboard').click(function() {
        // alert("I am clicking man!");
        x = 0.0;
        y = 0.025;
        dx = 0.00095;
        dy = 0.00025;
        radius = 0.05;
        opacity = 1;
    });
});
