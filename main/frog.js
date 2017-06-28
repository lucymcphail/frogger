function frog() {
    this.x = 375;
    this.y = 675;
    this.xspeed = 0;
    this.yspeed = 0;
    this.radius = 25;

    this.show = function () {
        fill(255, 255, 255);
        ellipse(this.x, this.y, this.radius, this.radius);
    }

    this.update = function () {
        this.x = constrain(this.x, 25, height - 25);
        this.y = constrain(this.y, 25, height - 25);
        if (this.isOnLog()) {
            if (this.y % 100 >= 50) {
                this.x++;
            } else {
                this.x--;
            }
        }
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
            score++;
            this.x = 375;
            this.y = 675;
        }
    }
}