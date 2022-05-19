let pos = 0;
let gamewindow = document.querySelector(".cadser")
let speed = 20;
let gamestarted = false;
let fullscree = false;
const pacArray = [
['./images/PacMan1.png', './images/PacMan2.png'],
['./images/PacMan3.png', './images/PacMan4.png'],
];
//let direction = [];
//var focus = 0;

let pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
return {
x: Math.random() * scale,
y: Math.random() * scale,
};
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
// returns an object with random values scaled {x: 33, y: 21}
let velocity = setToRandom(10); // {x:?, y:?}
let position = setToRandom(200);
let direction = 0;
let focus = 0;
let randomcounter = 0;
// Add image to div id = game
let game = document.getElementById('game');
let newimg = document.createElement('img');
newimg.style.position = 'absolute';
newimg.src = './images/PacMan1.png';
newimg.width = 100;
newimg.className = "farrrt";

// TODO: set position here
newimg.style.left = position.x;
newimg.style.top = position.y;
// TODO add new Child image to game  
game.appendChild(newimg);

// return details in an object
return {
position,
velocity,
newimg,
direction,
focus,
randomcounter,
};
}

function update() {
// loop over pacmen array and move each one and move image in DOM
pacMen.forEach((item) => {
checkCollisions(item);


//item.focus = (item.focus + 1) % 2;
item.randomcounter++;
if (item.randomcounter > 5 && item.randomcounter < 10){
  item.focus = 1;
}
if (item.randomcounter > 10){
  item.randomcounter = 0;
}
if (item.randomcounter < 5){
  item.focus = 0;
}

   


// console.log("item.newimg.width " + item.newimg.width)
// console.log("direction" + item.direction)
// console.log("pos" + pos)
// console.log("focus" + item.focus)
// console.log("item" + item)
// console.log("item.randomcounter" + item.randomcounter)
// console.log("width" + gamewindow.style.width)
// console.log("height" + gamewindow.style.height)



item.newimg.src = pacArray[item.direction][item.focus];

//   if (direction) {
//   // pos -= 20;
//   item.newimg.style.left = pos + "px";
// } else {
//   // pos += 20;
//   item.newimg.style.left = pos + "px";
// }

item.position.x += item.velocity.x;
item.position.y += item.velocity.y;

item.newimg.style.left = item.position.x;
item.newimg.style.top = item.position.y;
});
if(gamestarted){
setTimeout(update, speed);
}

}

function checkCollisions(item) {
// TODO: detect collision with all walls and make pacman bounce

if(fullscree == false){
if(item.position.x + item.velocity.x + item.newimg.width > parseInt(gamewindow.style.width) || item.position.x + item.velocity.x < 0){
item.velocity.x = -item.velocity.x;
item.direction = (item.direction == 0 ? 1 : 0);

}


if(item.position.y + item.velocity.y + item.newimg.height > parseInt(gamewindow.style.height) || item.position.y + item.velocity.y < 0)
item.velocity.y = -item.velocity.y;
}
else{
    if(item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || item.position.x + item.velocity.x < 0){
    item.velocity.x = -item.velocity.x;
    item.direction = (item.direction == 0 ? 1 : 0);
    
    }
    
    
    if(item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0)
    item.velocity.y = -item.velocity.y;
}

}
let fart = document.getElementsByTagName("img");

function endGame(){
    if(gamestarted){
        document.getElementById("buttonn").innerText="Start Game";

        fart = document.querySelectorAll(".farrrt");
        fart.forEach((item) => {item.remove();}
        )
        gamestarted = false;
        pacMen = [];


    }
    else{
    gamestarted = true;
    document.getElementById("buttonn").innerText="End Game";
}
    
}

function makeOne() {
pacMen.push(makePac()); // add a new PacMan
}
function changeSpeed(yuhh){
    if (speed > 0){
    speed += yuhh;
    }    
    else {
        update();  
    }
   
}
function changeSpeed2(yuhh){
    if (speed <= 0){
        gamestarted = false;
        speed += yuhh
        setTimeout(() => {
            gamestarted = true;
            update();  
        }, 100);
    }           
    else {
        speed += yuhh;
    }
   
}

function fullscreen(){
    if (fullscree == false){
    document.querySelector(".cadser").style.borderStyle = "hidden";
    fullscree = true;
    }
    else{
        fullscree = false;
        document.querySelector(".cadser").style.borderStyle = "solid";
        pacMen.forEach((item) => {
            let position = setToRandom(500);
            item.position.x = position.x;
item.position.y = position.y;

            item.newimg.style.left = item.position.x;
item.newimg.style.top = item.position.y;

            setToRandom(200);
        });

    }
}






