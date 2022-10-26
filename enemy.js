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
            this.ySpeed = Math.floor(Math.random() * (6 - 3) + 2); //literal numbers allow a random calculation of the speed of the movement on the Y axis
        }

    } //allows the enemy to move around the canvas, also spawns them back above the canvas when past bottom

    hit() {
        if (this.x + this.w > player.x && this.x < player.x +
            player.w && this.y + this.h > player.y && this.y < player.y + player.h) {
            player.x = 0; //reseting the player to the point of absolute zero on the x axis means the very left or the start of the stage
            health--;
            DAMAGE.play();
            console.log('Health:' + health);
            this.y = 0 - this.h; //makes sure the enemy is always spawned above the canvas by removing its height to give the illusion it has respawned above the canvas and not just been moved
        }
    } //detects if the aplyer and the enemy are colliding in either the x or y axis and decreases the health variable of the player while moving the enemy above the canvas
}