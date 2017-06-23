var scl = 100;

function setup() {
    createCanvas(700, 700);
    frogger = new frog();
    testlog = new obstacleLog(2, 1);
    testcar = new obstacleCar(4, -1);
}

function draw() {
    drawBackground();
    testlog.update();
    testlog.show();

    testcar.update();
    testcar.show();

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