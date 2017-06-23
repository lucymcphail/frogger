function frog() {
    this.x = 350;
    this.y = 650;
    this.xspeed = 0;
    this.yspeed = 0;
    this.radius = 40;

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
        this.x = constrain(this.x, 50, height - 50);
        this.y = constrain(this.y, 50, height - 50);
        this.xspeed = 0;
        this.yspeed = 0;
    }
}