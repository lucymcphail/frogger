function obstacleLog(row, direction, xpos) {
    this.spawn = function () {
        if (direction === 1) {
            this.speed = 1;
            this.x = 0 - this.width;
        } else {
            this.speed = -1;
            this.x = width;
        }
    }

    this.spawn();

    this.width = 200;
    this.height = 60;
    this.x = xpos;
    this.y = row * scl + 20;

    this.show = function () {
        fill(79, 37, 0);
        rect(this.x, this.y, this.width, this.height);
    }

    this.update = function () {
        this.x += this.speed;

        if (this.x >= width || this.x < 0 - this.width) {
            this.spawn();
        }
    }

    this.frogOn = function () {
        if (this.x + this.width >= frogger.x && this.x <= frogger.x) {
            if (this.y + this.height >= frogger.y && this.y <= frogger.y) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

function obstacleCar(row, direction, xpos) {
    this.spawn = function () {
        if (direction === 1) {
            this.speed = 1;
            this.x = 0 - this.width;
        } else {
            this.speed = -1;
            this.x = width;
        }
    }

    this.spawn();

    this.width = 100;
    this.height = 60;
    this.x = xpos;
    this.y = row * scl + 20;


    this.show = function () {
        fill(200, 20, 20);
        rect(this.x, this.y, this.width, this.height);
    }

    this.update = function () {
        this.x += this.speed;

        if (this.x >= width || this.x < 0 - this.width) {
            this.spawn();
        }
    }

    this.hitFrog = function () {
        if (this.x + this.width >= frogger.x && this.x <= frogger.x) {
            if (this.y + this.height >= frogger.y && this.y <= frogger.y) {
                frogger.die();
            }
        }
    }
}