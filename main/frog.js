function frog() {
    this.x = 375;
    this.y = 675;
    this.xspeed = 0;
    this.yspeed = 0;
    this.radius = 25;

    this.show = function () {
        fill(0, 60, 0);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.update = function () {
        this.x += this.xspeed * scl;
        this.y += this.yspeed * scl;
        this.x = constrain(this.x, 25, height - 25);
        this.y = constrain(this.y, 25, height - 25);
        this.xspeed = 0;
        this.yspeed = 0;
    }

    this.die = function () {
        this.x = 375;
        this.y = 675;
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
        if (this.y >= 100 && this.y <= 300) {

            if (this.isOnLog()) {
                return false;
            } else {
                frogger.die();
            }
        }
    }
    
    this.win = function() {
        if (this.y < 100) {
            this.spawn();
            score++;
        }
    }
}