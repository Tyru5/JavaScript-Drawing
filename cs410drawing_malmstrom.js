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
    ss();
    polygon();
    drawStar();
    setInterval(slidingBall, 10);
}

// function that retruns a random color: (sets it using rgba() )
function arbitraryColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var aplpha = Math.random();
    // var color = "rgba(" + red + "," + green + "," + blue + "," + aplpha + ")";
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    return color;
}


function superNova() {
    context.beginPath();
    // context.fillStyle = arbitraryColor();
    context.arc(cx, cy, 0.5, 0, 2 * Math.PI);
    // context.fill();
    // making a color gradient:

    var grd = context.createRadialGradient(0.5, 0.5, 0.25, 0.8, 0.25, 1);
    grd.addColorStop(0, arbitraryColor());
    grd.addColorStop(1, arbitraryColor());

    // fill in grd:
    context.fillStyle = grd;
    context.fill();
    context.closePath();
}

var commands = {
    explosion: function() {
        setInterval(superNova, 10);
    }
};

function ss() {
    // Horizontal scaling, Horizontal skewing, Vertical skewing, Vertical scaling, Horizontal moving, Vertical moving
    /*
        a	c	e
        b	d	f
        0	0	1
    */
    context.save();
    for (var i = 0; i < 30; i++) {
        drawRect();
        context.transform(0.66, 0, 0, 0.66, 0.33, 0.33);
    }
    context.restore();
}

function drawRect() {
    context.fillStyle = "Grey";
    context.fillRect(0.1, 0.35, 0.05, 0.05);
}


function polygon() {

    context.beginPath();
    context.strokeStyle = arbitraryColor();
    context.fillStyle = arbitraryColor();
    context.moveTo(1.2, 0.99);
    context.lineTo(1.4, 0.99);
    context.lineTo(1.45, 0.85);
    context.lineTo(1.35, 0.75);
    context.lineTo(1.2, 0.85);
    context.lineTo(1.2, 0.99);
    context.fill();
    context.stroke();
    context.closePath();

}


// reusing my old code from CT310:
function drawStar() {
    context.beginPath();
    context.fillStyle = "#800080";
    context.arc(1.35, 0.2, 0.025, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = arbitraryColor(); // pretty much black
    make_star(context, 1.35, 0.2, 10, 0.25, 0.005);
    context.fill();
}

function make_star(currentContext, xCent, yCent, num_points, outR, inR) { // xCent --> x coordinate of center of star in the context
    currentContext.beginPath(); // yCent --> y "                                         "
    for (var vert = 0; vert <= 2 * num_points; ++vert) {
        var angle = vert * Math.PI / num_points - Math.PI / 2;
        var radius = vert % 2 == 0 ? outR : inR;
        currentContext.lineTo(xCent + radius * Math.cos(angle), yCent + radius * Math.sin(angle));
    }
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
