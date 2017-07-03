function obstacleLog(row, direction, xpos, img) {
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

    this.img = img;
    this.width = scl * 2;
    this.height = scl * 0.6;
    this.x = xpos;
    this.y = row * scl + (scl / 5);

    var red = floor(random(80, 120));
    var green = floor(random(20));
    var blue = floor(random(10));

    this.show = function () {
        if (textures === 1) {
            tint(red, green, blue);
            image(this.img, this.x, this.y, this.width, this.height);
        } else {
            fill(red, green, blue);
            rect(this.x, this.y, this.width, this.height);
        }
    }

    this.update = function () {
        this.x += this.speed;

        if (this.x >= width || this.x < 0 - this.width) {
            this.spawn();
        }
    }

    this.frogOn = function () {
        if (this.x + this.width >= frogger.x && this.x <= frogger.x) {
            if (this.y + scl >= frogger.y && this.y - (scl - this.height) <= frogger.y) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

function obstacleCar(row, direction, xpos, img) {
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

    this.img = img;
    this.width = scl * 1.2;
    this.height = scl * 0.6;
    this.x = xpos;
    this.y = row * scl + (scl / 5);

    var red = floor(random(60, 255));
    var green = 0;
    var blue = floor(random(60, 255));

    this.show = function () {
        if (textures === 1) {
            tint(red, green, blue);
            image(this.img, this.x, this.y, this.width, this.height);
        } else {
            fill(red, green, blue);
            rect(this.x, this.y, this.width, this.height);
        }
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
