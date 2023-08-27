let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");


let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeTop = new Image();
let piprBottom = new Image();

bird.src ="ImgFlappy/bird.png";
bg.src ="ImgFlappy/bg.png";
fg.src ="ImgFlappy/fg.png";
pipeTop.src ="ImgFlappy/pipe_top.png";
piprBottom.src ="ImgFlappy/pipe_bottom.png";


let fly = new Audio();
let scoreAudio = new Audio();

fly.src = "AudioFlappy/fly.mp3";
scoreAudio.src = "AudioFlappy/score.mp3";









let score = 0;
let gap = 90;
let xPos = 10;
let yPos = 150;


document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -=30;
    fly.play();
}

var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0,
}

function draw() {
    ctx.drawImage(bg, 0, 0);

    for(let i = 0; i< pipe.length; ++i){
        ctx.drawImage(pipeTop, pipe[i].x, pipe[i].y);
        ctx.drawImage(piprBottom, pipe[i].x,pipe[i].y + pipeTop.height + gap);

        --pipe[i].x;

        if(pipe[i].x == 125){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random()* pipeTop.height) - pipeTop.height,
            })
        }

        if(xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeTop.width 
            && (yPos<= pipe[i].y + pipeTop.height || yPos + bird.height >= pipe[i].y  + pipeTop.height+ gap)
             || yPos + bird.height >= cvs.height - fg.height){
                location.reload();
        }

        if(pipe[i].x == 5 ){
            ++score;
            scoreAudio.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += 1.5;

    ctx.fillStyle = "white";
    ctx.font = "40px Montserrat";
    ctx.fillText(score, 140, 40)

    requestAnimationFrame(draw);
}

piprBottom.onload = draw;