function frog() {
    this.x = width / 2 - (scl / 2);
    this.y = height - (scl / 2);
    this.xspeed = 0;
    this.yspeed = 0;
    this.radius = scl / 2;

    this.show = function () {
        fill(255, 255, 255);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    this.update = function () {
        this.x = constrain(this.x, scl / 2, width - scl / 2);
        this.y = constrain(this.y, scl / 2, height - scl / 2);
        if (this.isOnLog()) {
            if (this.y % (scl * 2) >= (scl)) {
                this.x++;
            } else {
                this.x--;
            }
        }
    }

    this.die = function () {
        this.x = width / 2 - (scl / 2);
        this.y = height - (scl / 2);
        score = 0;
    }

    this.isOnLog = function () {
        var onLogs = [];
        for (var i = 0; i < logs.length; i++) {
            onLogs.push(logs[i].frogOn());
        }
        for (var i = 0; i < onLogs.length; i++) {
            if (onLogs[i] === true) {
                return true;
            }
        }
    }

    this.inRiver = function () {
        if (this.y >= scl * 2 && this.y <= scl * 6) {

            if (this.isOnLog()) {
                return false;
            } else {
                frogger.die();
            }
        }
    }

    this.win = function () {
        if (this.y < scl * 2) {
            score++;
            this.x = width / 2 - (scl / 2);
            this.y = height - (scl / 2);
        }
    }
}
