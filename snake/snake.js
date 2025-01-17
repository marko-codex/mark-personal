// Game variables
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context; 

// Snake variables
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
var velocityX = 0;
var velocityY = 0;
var snakeBody = [];

// Food variables
var foodX;
var foodY;

// Game state
var gameOver = false;

// Initialize game
window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); // Used for drawing on the board
    
    // Event listeners
    document.addEventListener("keyup", changeDirection);
    document.getElementById("restartButton").addEventListener("click", startNewGame);

    // Start the game
    startNewGame();
    setInterval(update, 1000 / 10); // Update every 100 milliseconds
}

// Main update function
function update() {
    if (gameOver) {
        // Display Game Over message only once
        if (!alertShown) {
            alert("Game Over! Starting a new game...");
            alertShown = true; // Prevent repeated alerts
        }
        startNewGame(); // Automatically start a new game
        return;
    }

    // Background gradient
    let gradient = context.createLinearGradient(0, 0, board.width, board.height);
    gradient.addColorStop(0, "#1e3c72");
    gradient.addColorStop(1, "#2a5298");
    context.fillStyle = gradient;
    context.fillRect(0, 0, board.width, board.height);

    // Draw food
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(foodX + blockSize / 2, foodY + blockSize / 2, blockSize / 2, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    // Check if snake eats food
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    // Move snake body
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    // Move snake head
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;

    // Draw snake
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillStyle = "lime";
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
        context.strokeStyle = "green";
        context.strokeRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    // Game over conditions
    if (snakeX < 0 || snakeX >= cols * blockSize || snakeY < 0 || snakeY >= rows * blockSize) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
        }
    }
}

// Change snake direction
function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// Place food at a random position
function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

// Start a new game
function startNewGame() {
    // Reset game variables
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    velocityX = 0;
    velocityY = 0;
    snakeBody = [];
    gameOver = false;

    // Place new food
    placeFood();

    // Clear the board and redraw
    update();
}