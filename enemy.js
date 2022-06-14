class Enemy {
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

    EnemyMove() {
        this.y += this.ySpeed;

        if (this.y > canvas.height) {
            this.y = 0 - this.w;
            this.x = Math.floor(Math.random() * (canvas.width - this.w));
            this.ySpeed = Math.floor(Math.random() * (12 - 4) + 4);
        }
    }
}