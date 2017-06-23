var scl = 100;

function setup() {
    createCanvas(1400, 1400);
    frogger = new frog();
    logs = [
        new obstacleLog(2, 1),
        new obstacleLog(3, -1),
        new obstacleLog(4, 1),
        new obstacleLog(5, -1)
    ];
    cars = [
        new obstacleCar(8, -1),
        new obstacleCar(9, 1),
        new obstacleCar(10, -1),
        new obstacleCar(11, 1)
    ];
}

function draw() {
    drawBackground();
    
    for (var i = 0; i < logs.length; i++) {
        logs[i].update();
        logs[i].show();
    }

    for (var i = 0; i < cars.length; i++) {
        cars[i].update();
        cars[i].show();
        cars[i].hitFrog();
    }

    frogger.inRiver();
    frogger.update();
    frogger.show();
    
}

function drawBackground() {
    background(74, 249, 39);
    fill(22, 156, 252);
    rect(0, 200, 1400, 400);
    fill(51, 51, 51);
    rect(0, 800, 1400, 400);
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