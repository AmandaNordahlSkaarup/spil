let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');

let maze = [
    [-1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1],
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    
    
];

let x = 0;
let y = 0;
let player = -1;
let playerPosition = -1;
let tSize = 25;

function keyUp(){
    if(maze[playerPosition.y-1][playerPosition.x] == 0){
        maze[playerPosition.y - 1][playerPosition.x] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
    }
}
function keyRight(){
    if(maze[playerPosition.y][playerPosition.x+1] == 0){
        maze[playerPosition.y][playerPosition.x+1] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
    }
}

function keyDown(){
    if(maze[playerPosition.y+1][playerPosition.x] == 0){
        maze[playerPosition.y +1][playerPosition.x] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
    }
}

function keyLeft(){
    if(maze[playerPosition.y][playerPosition.x-1] == 0){
        maze[playerPosition.y][playerPosition.x-1] = -1; //players nye position erstattes med -1
        maze[playerPosition.y][playerPosition.x] = 0; //players gamle position erstattes med 0
    }
}

function grid(){
for(y = 0; y < maze.length; y++){
    
    for(x = 0; x < maze[y].length; x++){
    
        if(maze[y][x] == 0){
    ctx.fillStyle = "lightgray";
    ctx.fillRect(x*tSize,y*tSize,tSize,tSize);
}
        if(maze[y][x] == 2){
    ctx.fillStyle = "black";
    ctx.fillRect(x*tSize,y*tSize,tSize,tSize);
}
        if(maze[y][x] == 1){
    ctx.fillStyle = "darkred";
    ctx.fillRect(x*tSize,y*tSize,tSize,tSize);
}
        if(maze[y][x] == player){
    ctx.fillStyle = "red";
    ctx.fillRect(x*tSize,y*tSize,tSize,tSize);
    playerPosition = {y:y,x:x};
    console.log(playerPosition.y + " " + playerPosition.x)
            }
        }
    }
}

window.addEventListener('keydown', function(event){
    console.log(event.keyCode);

switch (event.keyCode) {
    case 38: //KeyUp
        keyUp()
        grid()
        break;

    case 39: //KeyRight
        keyRight()
        grid()
        
        break;
    case 40: //KeyDown
        keyDown()
        grid() 
        break;

    case 37: //KeyLeft
        keyLeft()
        grid() 
        break;

    default:
        break;
}

})

grid();