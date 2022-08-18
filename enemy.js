class Enemy {
    constructor(x, y, h, w, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;

        const ENEMYIMG = new Image();
        ENEMYIMG.src = 'images/StarSprite.png';
        document.body.appendChild(ENEMYIMG);
        this.src = ENEMYIMG;
    }

    draw() {
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);
    }

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

    }

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