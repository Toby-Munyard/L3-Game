class Player {
    constructor(PLAYERIMG, x, y, h, w, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;

        PLAYERIMG = new Image();
        PLAYERIMG.src = 'images/RainbowStar.png';
        this.src = PLAYERIMG;
    }//basic creation of the player

    draw() {
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);
    } //draws the player on the canvas

    collide() {
        if (this.y >= canvas.height) {
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
        }
        if (downKeyPressed) {
            this.y += this.ySpeed;
            if (this.y < 0 || this.y > canvas.height) {
                this.yspeed = this.yspeed;
            }
        }
    } //moves the player according to what arrow key is pressed
}