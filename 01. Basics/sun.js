const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

// Create a canvas
const canvas = createCanvas(400, 400);
const ctx = canvas.getContext('2d');

// Define colors for the sections
const colors = ['#FFD700', '#FFA500', '#FF6347', '#FF4500'];

// Draw the circle
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;

ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.closePath();

// Fill each section with a different color
ctx.fillStyle = colors[0];
ctx.fill();

ctx.beginPath();
ctx.moveTo(centerX, centerY);
ctx.arc(centerX, centerY, radius, 0, Math.PI / 2);
ctx.closePath();

ctx.fillStyle = colors[1];
ctx.fill();

ctx.beginPath();
ctx.moveTo(centerX, centerY);
ctx.arc(centerX, centerY, radius, Math.PI / 2, Math.PI);
ctx.closePath();

ctx.fillStyle = colors[2];
ctx.fill();

ctx.beginPath();
ctx.moveTo(centerX, centerY);
ctx.arc(centerX, centerY, radius, Math.PI, 3 * Math.PI / 2);
ctx.closePath();

ctx.fillStyle = colors[3];
ctx.fill();

// Save the canvas to an image file
const output = fs.createWriteStream('sun.png');
const stream = canvas.createPNGStream();
stream.pipe(output);

output.on('finish', () => {
  console.log('Sun image saved as sun.png');
});
