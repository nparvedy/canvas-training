const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

function draw() {
    ctx.fillStyle = "#BADA55";
    ctx.fillRect(10, 10, 50, 50);
}

draw();

var image = new Image();
image.id = "pic";
image.src = canvas.toDataURL();

document.getElementById('image').appendChild(image);