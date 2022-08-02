class Player {
    constructor(x, y, h, w, c, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    draw() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    collide() {
        if (this.y > canvas.height) {
            this.y -= this.ySpeed;
        }
    }

    move() {
        var gravity = 20;

        this.y += gravity;


        if (leftKeyPressed && this.x > 0) {
            this.x -= this.xSpeed;
        }
        if (rightKeyPressed) {
            this.x += this.xSpeed;
            if (this.x > canvas.width) {
                this.x = 0 - this.w / 2;
            }
        }
        if (upKeyPressed) {
            this.y -= this.ySpeed + 30;
            if (this.y < 0 || this.y > canvas.height) {
                this.yspeed = this.yspeed * -1;
            } else if (this.y < canvas.height || this.y > canvas.height) {
                this.yspeed = this.yspeed;
            }
        }
        if (downKeyPressed) {
            this.y += this.ySpeed;
            if (this.y < 0 || this.y > canvas.height) {
                this.yspeed = this.yspeed;
            }
        }
    }
}