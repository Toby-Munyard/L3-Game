class Platform {
    constructor(x, y, h, w) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var coinSpriteArray = [];
        const COIN_SPRITES = 6;
        var coinSpriteNum = 0;
        var coinSpriteSheetCols = 0;
        var aniFrameRate = 0.1;

        for(i=0; i < COIN_SPRITES; i++){
            coinSpriteArray[i] = new Array(2);
            coinSpriteArray[i][0] = this.w * (i % 6);
            // console.log(coinSpriteArray[i][0]);

            if(i != 0 && i%6 == 0){
                coinSpriteSheetCols++;
            }
            coinSpriteArray[i][1] = this.w * coinSpriteSheetCols;
            console.log(coinSpriteArray[i]);
        }

    }

    // draw() {
    //     canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);
    // }

    hit() {
        if (this.x + this.w > player.x && this.x < player.x +
            player.w && this.y + this.h > player.y && this.y < player.y + player.h) {
            this.y = 0 - this.h;
            score++
            console.log("Score: " + score);
        }
    }

    loadImgAssests() {
        imgs = {};

        imgs.coin = new Image();
        imgs.coin.src = 'images/coinSpriteSheet.png'

        return imgs;
    } // end func holds information relating to sprite animations

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        canvasContext.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    } // end func this is how sprites are imported

    coinAnimation() {
        this.x = coinSpriteArray[Math.floor(coinSpriteNum)][0];
        this.y = coinSpriteArray[Math.floor(coinSpriteNum)][1];

        coinSpriteNum += aniFrameRate;

        if (coinSpriteNum > 5) {
            coinSpriteNum = 0;
        }
    }

}