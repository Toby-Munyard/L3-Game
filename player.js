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
        this.x += this.xSpeed;
    }
}