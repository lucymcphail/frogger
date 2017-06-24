var scl = 100;

function setup() {
    createCanvas(1400, 1400);
    frogger = new frog();
    logs = [];
    cars = [];

    for (var i = 2; i < 6; i++) {
        var j = floor(random(0, width));
        logs.push(new obstacleLog(i, i % 2, (j + 0) % 1600));
        logs.push(new obstacleLog(i, i % 2, (j + 400) % 1600));
        logs.push(new obstacleLog(i, i % 2, (j + 800) % 1600));
        logs.push(new obstacleLog(i, i % 2, (j + 1200) % 1600));
    }
     
    for (var i = 8; i < 12; i++) {
        var j = floor(random(0, width));
        cars.push(new obstacleCar(i, i % 2, (j + 0) % 1500));
        cars.push(new obstacleCar(i, i % 2, (j + 400) % 1500));
        cars.push(new obstacleCar(i, i % 2, (j + 800) % 1500));
        cars.push(new obstacleCar(i, i % 2, (j + 1200) % 1500));
    }
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