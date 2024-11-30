// Get references to the canvas and button
const canvas = document.getElementById('ballCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
// Ball properties
let ball = {
    x: 48, // Initial x position
    y: 50, // Initial y position
    radius: 20, // Ball radius
    speedX: 4, // Speed of ball in X direction
    speedY: 4, // Speed of ball in Y direction
    color: 'red' , // Ball color
  };
  // Draw the ball on the canvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); // Draw circle
    ctx.fillStyle = ball.color; // Set color from the ball object
    ctx.fill();
    ctx.closePath();
  }
  // Update ball position and handle bouncing
function updateBall() {
    // Check for collision with walls and reverse direction if needed
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.speedX = -ball.speedX; // Reverse direction in X
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.speedY = -ball.speedY; // Reverse direction in Y
    }
  
    // Update ball position
    ball.x += ball.speedX;
    ball.y += ball.speedY;
  }
  // Animation function
function animateBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    drawBall(); // Draw ball
    updateBall(); // Update ball position
  
    // Request next frame
    requestAnimationFrame(animateBall);
  }
  
  // Start animation when button is clicked
  startButton.addEventListener('click', () => {
    animateBall(); // Start the animation loop
  });