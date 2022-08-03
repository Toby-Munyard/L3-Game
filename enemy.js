class Enemy {
    constructor(x, y, h, w, c, xSpeed, ySpeed) {
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

    move() {
        this.y += this.ySpeed;
        this.x += this.xSpeed;

        if (this.x + this.w >= canvas.width || this.x <= 0){
            this.xSpeed *= -1;
        }

        if (this.y > canvas.height){
            this.y = 0 - this.h;
            this.ySpeed = Math.floor(Math.random()*(6 - 3) + 2);
        }

    }

    hit(){
        if(this.x + this.w > player.x && this.x < player.x + 
            player.w && this.y + this.h > player.y && this.y < player.y + player.h){
                player.x = 0;
                health--;
                console.log('Health:' + health);
                this.y = 0 - this.h;
        }
    }

    outOfBounds(){
        return this.y < 0;
    }

    hasHitItem(){
        return (this.x + this.w >= platform.x && this.x <= platform.x + platform.w) && (this.y + this.h >= platform.y && this.y <= platform.y + platform.h);
    }

    hasHitPlatform(){
        this.hasHitItem(platform);
    }

    hasCollided(){
        var self = true;
        var collided = false;
        if(self.hasHitPlatform(platform)){

        }
    }

}