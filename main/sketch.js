var scl = 50;
var score = 0;

function preload() {
    carImg = loadImage("tex/car.png");
    logImg = loadImage("tex/log.png");
    frogImg = loadImage("tex/frogger.jpg");
}

function setup() {
    createCanvas(700, 700);
    frogger = new frog();
    logs = [];
    cars = [];

    for (var i = 2; i < 6; i++) {
        var j = floor(random(0, width));
        logs.push(new obstacleLog(i, i % 2, (j + 0) % 800));
        logs.push(new obstacleLog(i, i % 2, (j + 200) % 800));
        logs.push(new obstacleLog(i, i % 2, (j + 400) % 800));
        logs.push(new obstacleLog(i, i % 2, (j + 600) % 800));
    }
     
    for (var i = 8; i < 12; i++) {
        var j = floor(random(0, width));
        cars.push(new obstacleCar(i, i % 2, (j + 0) % 760));
        cars.push(new obstacleCar(i, i % 2, (j + 190) % 760));
        cars.push(new obstacleCar(i, i % 2, (j + 380) % 760));
        cars.push(new obstacleCar(i, i % 2, (j + 570) % 760));
    }
}

function draw() {
    drawBackground();
    
    for (var i = 0; i < score; i++) {
        rect(20 + (i * scl), 20, 20, 20);
    }
    
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
    frogger.win();
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
