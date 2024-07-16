var runStart = 0;

function keyCheck(event) {

    if (event.which == 13) {
        if (runWorkerId == 0) {
            runWorkerId = setInterval(run, 100);
            runStart = 1;
            runSound.play();
            backgroundWorkerId = setInterval(moveBackground, 150);
            scoreWorkerId = setInterval(updateScore, 200);

            createBlockId = setInterval(creatBlocks, 100);
            moveBlocksId = setInterval(moveBlocks, 100);
        }


    }

    if (event.which == 32) {
        if (runStart == 1) {
            if (jumpWorkerId == 0) {
                clearInterval(runWorkerId);
                runSound.pause();
                jumpWorkerId = setInterval(jump, 100);
                jumpSound.play();
            }

        }


    }

}

var runSound = new Audio("run.mp3");




var santa = document.getElementById("santa");
var runImageNumber = 1;
var runWorkerId = 0;
function run() {
    runImageNumber++;
    if (runImageNumber == 12) {
        runImageNumber = 1;
    }
    santa.src = "Run (" + runImageNumber + ").png";

}

var jumpSound = new Audio("jump.mp3");


var jumpImageNumber = 1;
var jumpWorkerId = 0;
var santaMarginTop = 550;

function jump() {

    jumpImageNumber++;
    if (jumpImageNumber <= 9) {
        santaMarginTop = santaMarginTop - 30;
        santa.style.marginTop = santaMarginTop + "px";
    }

    if (jumpImageNumber >= 10) {
        santaMarginTop = santaMarginTop + 30;
        santa.style.marginTop = santaMarginTop + "px";
    }
    if (jumpImageNumber == 17) {
        jumpImageNumber = 1;

        clearInterval(jumpWorkerId);
        jumpWorkerId = 0;

        runWorkerId = setInterval(run, 100);
        runSound.play();
    }


    santa.src = "jump (" + jumpImageNumber + ").png";
}

var background = document.getElementById("background");
var backgroundX = 0;
var backgroundWorkerId = 0;
var scoreWorkerId = 0;
function moveBackground() {
    backgroundX = backgroundX - 30;
    background.style.backgroundPositionX = backgroundX + "px";

}



var winSound = new Audio("winsound.wav");
var score = document.getElementById("score");
var newScore = 0;
function updateScore() {
    newScore++;
    score.innerHTML = newScore;
    if (newScore == 200) {
        deadSound.pause();
        clearInterval(runWorkerId);
        runWorkerId = -1;
        runSound.pause();
        clearInterval(jumpWorkerId);
        jumpWorkerId = -1;
        clearInterval(backgroundWorkerId);
        clearInterval(scoreWorkerId);
        clearInterval(createBlockId);
        clearInterval(moveBlocksId);
        winSound.play();
        deadSound.pause();





        document.getElementById("gameWin").style.visibility = "visible";

    }

}



var blockMarginLeft = 1000;
var createBlockId = 0;
var blockId = 0;
function creatBlocks() {

    var block = document.createElement("div");
    block.className = "block";

    block.id = "block" + blockId;
    blockId++;

    var gap = Math.random() * (1000 - 400) + 400;
    blockMarginLeft = blockMarginLeft + gap;

    block.style.marginLeft = blockMarginLeft + "px";
    background.appendChild(block);
}
var moveBlocksId = 0;
function moveBlocks() {

    for (var i = 1; i <= blockId; i++) {
        var currentBlock = document.getElementById("block" + i);
        var currentMarginLeft = currentBlock.style.marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 20;
        currentBlock.style.marginLeft = newMarginLeft + "px";
        if (newMarginLeft <= 130) {
            if (newMarginLeft >= 10) {
                if (santaMarginTop <= 550) {
                    if (santaMarginTop > 450) {
                        clearInterval(runWorkerId);
                        runSound.pause();
                        clearInterval(jumpWorkerId);
                        jumpWorkerId = -1;
                        clearInterval(backgroundWorkerId);
                        clearInterval(scoreWorkerId);
                        clearInterval(createBlockId);
                        clearInterval(moveBlocksId);

                        setInterval(dead, 100);
                        deadSound.play();
                    }
                }
            }
        }




    }
}
var deadSound = new Audio("dead.mp3");
var deadImageNumber = 1;
var deadWorkerId = 0;
function dead() {
    deadImageNumber++;
    if (deadImageNumber == 14) {
        deadImageNumber = 13;

        santa.style.marginTop = "550px";
        document.getElementById("gameOver").style.visibility = "visible";
        document.getElementById("endScore").innerHTML = newScore;
    }
    santa.src = "Dead (" + deadImageNumber + ").png";

}

function re() {
    location.reload();
}

function wb() {

    document.getElementById("gameWin").style.visibility = "hidden";
    location.reload();
}



function gst() {
    document.getElementById("gameStart").style.visibility = "hidden";

}


var pauseWokerId = 0;
function pause() {

    pauseWokerId++

    if (pauseWokerId >= 1) {

        clearInterval(runWorkerId);
        runWorkerId = -1;
        runSound.pause();
        clearInterval(jumpWorkerId);
        jumpWorkerId = -1;
        clearInterval(backgroundWorkerId);
        clearInterval(scoreWorkerId);
        clearInterval(createBlockId);
        clearInterval(moveBlocksId);

    }


}

var playWokerId = 0;
var playId = 0;
function play() {

    playId++
    if (playId >= 1) {
        if (playWokerId == 0) {
            runWorkerId = setInterval(run, 100);
            runStart = 1;
            runSound.play();
            backgroundWorkerId = setInterval(moveBackground, 150);
            scoreWorkerId = setInterval(updateScore, 200);

            createBlockId = setInterval(creatBlocks, 100);
            moveBlocksId = setInterval(moveBlocks, 100);
        }
    }


}

















