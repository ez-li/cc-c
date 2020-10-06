// var canvas = document.getElementById("c");
// var ctx = canvas.getContext("2d");
// var img = document.getElementById("scream"); // html id of image
// ctx.drawImage(img, 10, 10);

var canvas = new fabric.Canvas('c');

var rect = new fabric.Rect({
    left: 200,
    top: 250,
    fill: 'blue',
    width: 200,
    height: 200
});

// canvas.add(rect);

// elbow

const addThing = (thing) => {
    fabric.Image.fromURL(thing, (img) => {
        img.scale(0.5)
        canvas.add(img);
    });
}

var elbow = 'assets/elbow.png';
var metalRing1 = 'assets/metal-ring1.png';
var metalRing2 = 'assets/metal-ring2.png';
var threadedRing = 'assets/threaded-ring.png';
var knot = 'assets/knot.png';

var rock1 = 'assets/rock1.png';
var rock2 = 'assets/rock2.png';
var rock3 = 'assets/rock3.png';
var rock4 = 'assets/rock4.png';
var cloud1 = 'assets/cloud1.png';
var cloud2 = 'assets/cloud2.png';
var leaf1 = 'assets/leaf1.png';
var leafDead = 'assets/leaf-dead.png';
var leafFan = 'assets/leaf-fan.png';
var leafRed = 'assets/leaf-red.png';
var leafThin = 'assets/leaf-thin.png';
var orange = 'assets/orange.png';

addThing(elbow);
addThing(rock1);
addThing(cloud1)