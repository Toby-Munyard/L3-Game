class Player{
    constructor(x,y,h,w,c,xSpeed,ySpeed){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    draw(){
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    move(){
        if(leftKeyPressed && this.x > 0){
            thix.x -= this.xSpeed;
        }
        if(rightKeyPressed){
            this.x += this.xSpeed;
            if(this.x > canvas.width){
                this.x = 0 - this.w / 2;
            }
        }
    }
}