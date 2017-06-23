function obstacleLog(row, direction) {
    this.width = 200;
    this.height = 60;
    this.x = 0 - this.width;
    this.y = row * scl + 20;

    if (direction === 1) {
        this.speed = 1;
        this.x = 0 - this.width;
    } else {
        this.speed = -1;
        this.x = width;
    }

    this.show = function() {
        fill(79, 37, 0);
        rect(this.x, this.y, this.width, this.height);
    }

    this.update = function() {
        this.x += this.speed;
    }
}

function obstacleCar(row, direction) {
    this.width = 100;
    this.height = 60;
    this.x = 0 - this.width;
    this.y = row * scl + 20;

    if (direction === 1) {
        this.speed = 1;
        this.x = 0 - this.width;
    } else {
        this.speed = -1;
        this.x = width;
    }

    this.show = function() {
        fill(200, 20, 20);
        rect(this.x, this.y, this.width, this.height);
    }

    this.update = function() {
        this.x += this.speed;
    }
}