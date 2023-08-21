// __User settings
let StartButton = document.getElementById("Start-button");
let Menu = document.querySelector(".menu");
let speed = document.getElementById("Speed");
let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let userSpeed = 130;
let gameSpeed;
let speedArr = ["Slow", "Medium", "Fast"];

let i = 0;
speed.innerHTML = speedArr[i];

rightArrow.addEventListener('click', ()=>{
    if(i < 2){
        ++i;
        userSpeed -= 25;
        console.log(gameSpeed);
        speed.innerHTML = speedArr[i];
        leftArrow.style.display = "flex";   
    }
});

leftArrow.addEventListener('click', ()=>{
    if(i > 0){
        --i;
        userSpeed += 25;
        console.log(gameSpeed);
        speed.innerHTML = speedArr[i];
        rightArrow.style.display = "flex";  
    }
});

StartButton.addEventListener('click',()=>{
    Menu.classList.toggle('closed');
    gameSpeed = userSpeed;
    startGame();
});

function startGame(){
    // ___main code
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    const ground = new Image();
    ground.src = "Images/Snake_arena_green.png";

    const foodImg = new Image();
    foodImg.src = "Images/food.png";

    let box = 32;

    let score = 0;

    let food = {
        x: Math.floor((Math.random()*17 +1))*box,
        y: Math.floor((Math.random()*15 +3))*box,
    };

    let snake = [];
    snake[0] = {
        x:9 * box,
        y: 10 * box,
    };

    //_________________Movement 

    document.addEventListener("keydown", direction);

    let dir;

    function direction(event){
        if(event.keyCode == 37 && dir != "right"){
            dir = "left";
        }
        if(event.keyCode == 38 && dir != "down"){
            dir = "up";
        }
        if(event.keyCode == 39 && dir != "left"){
            dir = "right";
        }
        if(event.keyCode == 40 && dir != "up"){
            dir = "down";
        }
    }

    function eatTail(head, arr){
        for(let i = 0; i < arr.length; ++i){
            if(arr[i].x == head.x && arr[i].y == head.y){
                clearInterval(game);
            }
        }
    }


    // ___________Game draw
    function drawGame() {
        // field snake and food
        ctx.drawImage(ground, 0, 0);
        ctx.drawImage(foodImg, food.x, food.y);

        for(let i = 0; i<snake.length; ++i){
            ctx.fillStyle = i == 0 ? "green" : "lightblue";
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
        }

        // _______Score Board
        ctx.fillStyle="white";
        ctx.font = "50px Montserrat";
        ctx.fillText(score, box*2.5, box*1.7);
        ctx.drawImage(foodImg, box, box*0.7);


        //______Movement draw
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if(snakeX > box*17 || snakeX < box || snakeY< 3*box || snakeY > box*17){
            clearInterval(game);
        }

        if(dir == "left"){
            snakeX -= box;
        }
        if(dir == "right"){
            snakeX += box;
        }
        if(dir == "up"){
            snakeY -= box;
        }
        if(dir == "down"){
            snakeY += box;
        }

        // _____Eat food
        if(snakeX == food.x && snakeY == food.y){
            ++score;
            food = {
                x: Math.floor((Math.random()*17 +1))*box,
                y: Math.floor((Math.random()*15 +3))*box,
            };
        }else{
            snake.pop();
        }
        
        let newHead = {
            x: snakeX,
            y: snakeY,
        }

        eatTail(newHead, snake);
        snake.unshift(newHead);
    }
    console.log(gameSpeed);
    let game = setInterval(drawGame, gameSpeed);
}