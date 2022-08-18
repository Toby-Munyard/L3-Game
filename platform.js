class Platform {
    constructor(x, y, h, w, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        const COINIMG = new Image();
        COINIMG.src = 'images/coinSpriteSheet.png';
        document.body.appendChild(COINIMG);
        this.src = COINIMG;
    }

    draw() {
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);
    }

    hit() {
        if (this.x + this.w > player.x && this.x < player.x +
            player.w && this.y + this.h > player.y && this.y < player.y + player.h) {
            this.y = 0 - this.h;
            score++
            console.log("Score: " + score);
        }
    }
}