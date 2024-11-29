// Get references to the canvas and button
const canvas = document.getElementById('ballCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
// Ball properties
let ball = {
    x: 50, // Initial x position
    y: 50, // Initial y position
    radius: 20, // Ball radius
    speedX: 4, // Speed of ball in X direction
    speedY: 4, // Speed of ball in Y direction
    color: 'red', // Ball color
  };