class Enemy extends Player {
    constructor(x, y, h, w, c, xSpeed, ySpeed) {
        super(x, y, h, w, c, xSpeed, ySpeed);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.colour = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    draw() {
        canvasContext.fillStyle = this.colour;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }
    EnemyMove() {
        // this.y += this.ySpeed;

        // if (this.y > canvas.height) { // enemy out of bottom of canvas 
        //     this.y = 0 - this.w * this.h;
        //     this.x = Math.floor(Math.random() * (canvas.width - this.w * this.h));
        //     this.ySpeed = Math.floor(Math.random() * (12 - 4) + 4);
        // }

        // if (this.y + this.w * this.h > super.y && this.y < super.y + super.w * super.h && this.x + this.w * this.h > super.x && this.x < super.x + super.w * super.h) {
        //     // player respawns to center of canvas after enemy collides with player
        //     this.x = Math.floor(Math.random() * (canvas.width - this.w * this.h));
        //     this.y = canvas.height + 100;
        //     super.x = canvas.width / 2;
        //     super.y = canvas.height - super.w * super.h * 1.75;
        //     console.log("Hello world!");
        // }

        // isCollide(this, Player); {
        //     return (
        //         ((this.y + this.h) < (super.y)) ||
        //         (this.y > (super.y + super.height)) ||
        //         ((this.x + this.w) < super.x) ||
        //         (this.x > (super.x + super.width))
        //     );
        // };

    }
}