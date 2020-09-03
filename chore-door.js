//linking the html doors to js functionality
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

//images for doors when clicked
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const startButton = document.getElementById('start');

let currentlyPlaying = true;

//when clicked doors will change image to space, beach, or bot
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

//assigning a random door image based on random nums
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
      openDoor1 = spaceDoorPath;
      openDoor2 = botDoorPath;
      openDoor3 = beachDoorPath;
    } else { //choreDoor === 2
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = botDoorPath;
    }
};

//has the door been opened
function isClicked(door) {
    if (door.src === closedDoorPath) {
      return false;
    } else {
      return true;
    }
};

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    } else {
        startButton.innerHTML = 'Game over! Play again?';
    }
    currentlyPlaying = false;
};

//subtracts numClosedDoors and evaluates if the game is over
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
};

//onclick event to change doors to random image when clicked; each door only opened once
doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying === true) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying === true) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying === true) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
};

function startRound() {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};

startRound();