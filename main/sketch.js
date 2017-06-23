var scl = 100;

function setup() {
    createCanvas(700, 700);
    frogger = new frog();
    logs = [];
    cars = [];

    logs[0] = new obstacleLog(1, 1);
    cars[0] = new obstacleCar(4, -1);
    logs[1] = new obstacleLog(2, -1);
    cars[1] = new obstacleCar(5, 1);
}

function draw() {
    drawBackground();
    logs[0].update();
    logs[0].show();

    logs[1].update();
    logs[1].show();

    cars[0].update();
    cars[0].show();
    cars[0].hitFrog();

    cars[1].update();
    cars[1].show();
    cars[1].hitFrog();

    frogger.inRiver();
    frogger.update();
    frogger.show();
    
}

function drawBackground() {
    background(74, 249, 39);
    fill(22, 156, 252);
    rect(0, 100, 700, 200);
    fill(51, 51, 51);
    rect(0, 400, 700, 200);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        frogger.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        frogger.dir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        frogger.dir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        frogger.dir(1, 0);
    }
}