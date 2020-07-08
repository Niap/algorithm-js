var algovisualizer = function(canvasId,N){
    this.canvas = document.getElementById(canvasId);
    this.sceneWith = canvas.width;
    this.sceneHeight = canvas.width;
    this.circles = [];
    this.R = 50;
    this.ctx = this.canvas.getContext('2d');

    this.run = function(){
        for(let i=0;i<N;i++){
            var x = parseInt(Math.random()*(this.sceneWith -2*this.R)) +this.R;
            var y = parseInt(Math.random()*(this.sceneHeight -2*this.R)) +this.R;
            var vx = parseInt(Math.random()*11) -5;
            var vy = parseInt(Math.random()*11) -5;
            this.circles.push(new circle(x,y,this.R,vx,vy));
        }
        requestAnimationFrame(this.draw);
    }

    this.draw = (axisX) => {
        /* 清空画布(或部分清空) */
        this.ctx.clearRect(0, 0, this.sceneWith, this.sceneHeight);
        this.ctx.strokeStyle = "blue";
        for(var i=0;i<N;i++){
            let c = this.circles[i];
            this.ctx.beginPath();
            this.ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI, false);
            this.ctx.stroke()
            c.move(0,0,this.sceneWith,this.sceneHeight);
        }
        requestAnimationFrame(this.draw);
    }
}