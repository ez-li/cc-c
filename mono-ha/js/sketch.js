const fabric = require("fabric").fabric;

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("c");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var context = canvas.getContext("2d");
}, false);

var canvas = this.__canvas = new fabric.Canvas('c');
// create a rect object
var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var img = document.createElement('img');
img.src = deleteIcon;

fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = 'black';
fabric.Object.prototype.cornerStyle = 'circle';

// function renderIcon(ctx, left, top, styleOverride, fabricObject) {
//   var size = this.cornerSize;
//   ctx.save();
//   ctx.translate(left, top);
//   ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
//   ctx.drawImage(img, -size / 2, -size / 2, size, size);
//   ctx.restore();
// }

var elbow = new Image().src('../assets/elbow.png');
var metalRing = '../assets/metal-ring.png';
var rock = '../assets/rock.png';
var threadedRing = '../assets/threaded-ring.png';

// elbow.onLoad = () => {
//   CanvasRenderingContext2D.drawImage(elbow, 100, 100);
// }




// function Add() {
//   var rect = new fabric.Rect({
//     left: 100,
//     top: 50,
//     fill: 'yellow',
//     width: 200,
//     height: 100,
//     objectCaching: false,
//     stroke: 'lightgreen',
//     strokeWidth: 4,
//   });

//   canvas.add(rect);
//   canvas.setActiveObject(rect);
// }

// fabric.Object.prototype.controls.deleteControl = new fabric.Control({
//   x: 0.5,
//   y: -0.5,
//   offsetY: 16,
//   cursorStyle: 'pointer',
//   mouseUpHandler: deleteObject,
//   render: renderIcon,
//   cornerSize: 24
// });

// Add();

// function deleteObject(eventData, target) {
//   var canvas = target.canvas;
//   canvas.remove(target);
//   canvas.requestRenderAll();
// }

// function renderIcon(ctx, left, top, styleOverride, fabricObject) {
//   var size = this.cornerSize;
//   ctx.save();
//   ctx.translate(left, top);
//   ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
//   ctx.drawImage(img, -size / 2, -size / 2, size, size);
//   ctx.restore();
// }