const { createCanvas } = require('canvas');
const fs = require('fs');

// Create a canvas
const canvas = createCanvas(400, 400);
const ctx = canvas.getContext('2d');

// Define colors for the sections
const colors = ['#FFD700', '#FFA500', '#FF6347', '#FF4500'];

// Function to draw a pentagon
function drawPentagon(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

  for (let i = 1; i <= 5; i++) {
    ctx.lineTo(x + size * Math.cos((i * 2 * Math.PI) / 5), y + size * Math.sin((i * 2 * Math.PI) / 5));
  }

  ctx.closePath();
}

// Set the position and size of the pentagon
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const pentagonSize = 150;

// Draw the pentagon
drawPentagon(centerX, centerY, pentagonSize);

// Fill each section with a different color
for (let i = 0; i < colors.length; i++) {
  ctx.fillStyle = colors[i];
  ctx.fill();
}

// Save the canvas to an image file
const output = fs.createWriteStream('pentagon.png');
const stream = canvas.createPNGStream();
stream.pipe(output);

output.on('finish', () => {
  console.log('Pentagon image saved as pentagon.png');
});
