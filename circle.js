var circle = function(x,y,r,vx,vy){
    this.x=x;
    this.y=y;
    this.r=r;
    this.vx = vx;
    this.vy = vy;
    this.move = function(minx,miny,maxx,maxy){
        this.x += this.vx;
        this.y += this.vy;
        this.checkCollision(minx,miny,maxx,maxy);
    }
    this.checkCollision = function(minx,miny,maxx,maxy){
        if( this.x-this.r <minx ){
            this.x=this.r;
            this.vx=-this.vx;
        }
        if( this.x+this.r >= maxx ){
            this.x=maxx-this.r;
            this.vx=-this.vx;
        }
        if( this.y-this.r < miny ){
            this.y=this.r;
            this.vy=-this.vy;
        }
        if( this.y+this.r >= maxy ){
            this.y=maxy-this.r;
            this.vy=-this.vy;
        }
    }
}