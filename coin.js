class Coin {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    } //basic creation of coins

    draw() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    } //draws coins on the canvas

    hit() {
        if (this.x + this.w > player.x && this.x < player.x +
            player.w && this.y + this.h > player.y && this.y < player.y + player.h) {
            this.y = 0 - this.h;
            score++
            console.log("Score: " + score);
        }
    } //collision between player and coins

}