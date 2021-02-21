var bubbleCount = 1;
var bubbles = {};
var sky = document.getElementById("sky");
var body = document.querySelector("body");
var makeNewPosition = () => {
    // Get viewport dimensions (remove the dimension of the div)
    var h = 600;
    var w = 800;
    var nh = Math.floor(Math.random() * 100) + "%";
    var nw = Math.floor(Math.random() * 100) + "%";
    return [nh, nw];
}
var generateBubble = () => {
    var bubble = document.createElement('div');
    bubble.setAttribute("class", "bubble");
    bubble.setAttribute("id", bubbleCount);
    bubbles[bubbleCount] = true;

    var float = (b) => {
        var place = makeNewPosition();
        var bb = document.querySelectorAll(".bubble");
        console.log(bb)
        bb.forEach(())
        $(bb).animate({ top: place[0], left: place[1] }, Math.random(), () => {
            float(b);
        });
    };
    sky.appendChild(bubble);
    // var animateBubble = (bc) => {
    //     // $(document).ready(() => float(bc));
    //     float(bc);
    // }
    // setTimeout(() => animateBubble(bubbleCount), 2000);
    setTimeout(() => float(bubbleCount), 2000);
}

var bubbleButton = document.createElement('button');
bubbleButton.innerHTML = "blow a bubble"
bubbleButton.setAttribute("id", "bubbleButton");
bubbleButton.onclick = () => generateBubble();
sky.appendChild(bubbleButton);
