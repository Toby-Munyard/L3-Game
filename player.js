class Player{
    constructor(x,y,x,h,c,xSpeed,ySpeed){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    draw(){
        canvasContext.fillStyle = c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }
}