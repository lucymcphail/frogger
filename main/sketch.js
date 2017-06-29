var scl = 50;
var score = 0;
var speed = scl / 25;
var textures = 1;

function preload() {
    carImg = loadImage("tex/car.png");
    logImg = loadImage("tex/log.png");
    frogImg = loadImage("tex/frogger.png");
}

function setup() {
    scl = windowHeight / 14;
    createCanvas(windowWidth, windowHeight);
    frogger = new frog();
    logs = [];
    cars = [];

    for (var i = 2; i < 6; i++) {
        var start = floor(random(0, width));
        for (var j = 0; j < width / (scl * 4); j++) {
            logs.push(new obstacleLog(i, i % 2, (start + scl * 4 * j) % (width + scl * 2)));
        }
    }

    for (var i = 8; i < 12; i++) {
        var start = floor(random(0, width));
        for (var j = 0; j < width / (scl * 4); j++) {
            cars.push(new obstacleCar(i, i % 2, (start + scl * 4 * j) % (width + scl * 1.2)));
        }
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

    if (keyIsDown(LEFT_ARROW)) {
        frogger.x -= speed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        frogger.x += speed;
    }

    if (keyIsDown(UP_ARROW)) {
        frogger.y -= speed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        frogger.y += speed;
    }

    frogger.inRiver();
    frogger.update();
    frogger.show();
    frogger.win();
}

function drawBackground() {
    background(74, 249, 39);
    fill(255, 20, 20);
    rect(0, scl * 2, windowWidth, scl * 4);
    fill(51, 51, 51);
    rect(0, scl * 8, windowWidth, scl * 4);
}

function keyPressed() {
    if (keyCode == ENTER) {
        if (textures == 1) {
            textures = 0;
        } else {
            textures = 1;
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
