//Set background img

//Set img and position for "flappy bird"

//Set img and position for pipes

//Create randomly generated pipes at a set interval and put into an array

//Make pipes move horizontally from right to left. Also make pipe disappear/remove from array once pipe leaves screen.

//Set an event listener that makes "flappy bird" move vertically when spacebar is pressed or screen is clicked.
//Add gravity to "flappy bird" so if no input is detected, "flappy bird" will begin to fall.

//Set boundary at top so player can't go up forever.

//Set collision values for "flappy bird", pipes, and floor.
//Ideally set collision of floor to the height of the floor in background img

//Create counter at the top middle of the screen. Counter should go up by 1 once "flappy bird" passes through a pipe.

//If collision occurs display a `Game Over! Your Score: ${counter value}` message.
//There will be no win condition for this game.

//Once game over occurs, pressing spacebar or clicking on the screen will reset the game.


//The initial setup came from Kenny Yip Coding's tutorial on a flappy bird game.
//This was just to set the background/sprites as well as learn how to load objects into the game.
const canvas = document.createElement('canvas');
canvas.id = 'bgImage';
canvas.style.backgroundImage = 'url("./background-day.png")';
document.body.appendChild(canvas);


let bgImage;
let bgImageWidth = 288; 
let bgImageHeight = 512; 
let context;

//game details
let gameOver = false;

let score = 0;

//flappy bird
let fBirdWidth = 34;
let fBirdHeight = 24;
let fBirdX = bgImageWidth/8;
let fBirdY = bgImageHeight/3;

let fBird = {
    x : fBirdX,
    y : fBirdY,
    width : fBirdWidth,
    height : fBirdHeight
}

let birdVelocity = 0;
let birdGravity = 0.1;

function birdJump(event) {
    if (event.key === " " || event.key === "ArrowUp") {
        birdVelocity = -3.8;
    }
}

//Pipes
let pipesArray = [];

let pipeWidth = 52;
let pipeHeight = 320;
let pipeX = bgImageWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

function createPipes() {
    if (gameOver === true) {
        return;
    }
    let changePipe = -pipeHeight/3 - Math.random()*(pipeHeight/2.5)

    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : changePipe,
        width : pipeWidth,
        height : pipeHeight,
        point : false
    }
    pipesArray.push(topPipe);

    let bottomPipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : changePipe + pipeHeight + (bgImage.height/4.8), //making the divisor bigger makes the gap smaller
        width : pipeWidth,
        height : pipeHeight
    } 
    pipesArray.push(bottomPipe);

    while (pipesArray.length > 0 && pipesArray[0].x < -pipeWidth) {
        pipesArray.shift();
    }
}

let velocityPipe = -1.2;

//Floor
let floorWidth = 336;
let floorHeight = 112;
let floorX = 0;
let flooyY = 400;

let floor = {
    x : floorX,
    y : flooyY,
    width : floorWidth,
    height : floorHeight
}

window.onload = function() {
    //Drawing the background
    bgImage = document.getElementById("bgImage");
    bgImage.width = bgImageWidth;
    bgImage.height = bgImageHeight;
    context = bgImage.getContext("2d");

    //Drawing flappy bird
    fBirdImg = new Image();
    fBirdImg.src = "./yellowbird-midflap.png";
    fBirdImg.addEventListener("load",function(){
        context.drawImage(fBirdImg, fBird.x, fBird.y, fBird.width, fBird.height);
    });

    //Drawing floor
    floorImg = new Image();
    floorImg.src = "./base.png";
    floorImg.addEventListener("load", function() {
        context.drawImage(floorImg, floor.x, floor.y, floor.width, floor.height);
    });

    //Drawing Pipes
    topPipeImg = new Image();
    topPipeImg.src = "./topPipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottomPipe.png";

    requestAnimationFrame(animate);
    
    setInterval(createPipes, 900);

    document.addEventListener("keydown", birdJump);

    document.addEventListener("click", resetGame);

};

function animate() {
    if (gameOver === true) {
        return;
    }
    requestAnimationFrame(animate);
    context.clearRect(0, 0, bgImage.width, bgImage.height);

    //Redraw flappy bird
    birdVelocity += birdGravity;
    fBird.y = Math.max(fBird.y + birdVelocity,0);
    context.drawImage(fBirdImg, fBird.x, fBird.y, fBird.width, fBird.height);

    //Redraw pipes
    for (let i = 0; i < pipesArray.length; i++) {
        let pipe = pipesArray[i];
        pipe.x += velocityPipe;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if ((pipe.point === false) && (fBird.x > pipe.x + pipe.width)) {
            score += 1;
            pipe.point = true;
        }

        if (collision(fBird, pipe)) {
            gameOver = true;
        }
    }

    context.fillStyle = "black";
    context.font="45px sans-serif";
    context.fillText(score, 5, 45);

    //Redraw floor
    context.drawImage(floorImg, floor.x, floor.y, floor.width, floor.height);
    if (collision(fBird, floor)) {
        gameOver = true;
    }
    
    
}

function collision(a, b) {
    return  a.x < b.x + b.width && 
            a.y < b.y + b.height&&
            b.x < a.x + a.width &&
            b.y < a.height + a.y;
}

function resetGame() {
    if (gameOver === true) {
        fBird.y = fBirdY;
        pipesArray = [];
        gameOver = false;
        birdVelocity = 0;
        score = 0;
        requestAnimationFrame(animate);
    }
}

