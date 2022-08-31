class Enemy {
    constructor(ENEMY_IMG, x, y, w, h, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;

        ENEMY_IMG = new Image();
        ENEMY_IMG.src = 'images/StarSprite.png';
        this.src = ENEMY_IMG;
    } //basic creation of enemy

    draw() {
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);
    } //draws enemy on the canvas


    move() {
        this.y += this.ySpeed;
        this.x += this.xSpeed;

        if (this.x + this.w >= canvas.width || this.x <= 0) {
            this.xSpeed *= -1;
        }

        if (this.y > canvas.height) {
            this.y = 0 - this.h;
            this.ySpeed = Math.floor(Math.random() * (6 - 3) + 2);
        }

    } //allows the enemy to move around the canvas, also spawns them back above the canvas when past bottom

    hit() {
        if (this.x + this.w > player.x && this.x < player.x +
            player.w && this.y + this.h > player.y && this.y < player.y + player.h) {
            player.x = 0;
            health--;
            console.log('Health:' + health);
            this.y = 0 - this.h;
        }
    }

    outOfBounds() {
        return this.y < 0;
    }

    hasHitItem(item) {
        return ((this.x + this.w) >= item.x && this.x <= (item.x + item.w)) && ((this.y + this.h) >= item.y && this.y <= (item.y + item.h));
    }

    hasHitPlatform() {
        return this.hasHitItem(platform);
    }

    hasCollided() {
        var self = true;
        var collided = false;
        platforms.forEach(function (platform, i) {
            if (self.hasHitPlatform(platform)) {
                delete enemies[i];
                collided = true;
            }
        });
        platforms = platforms.filter(item => item !== undefined);
        return collided;
    }
}