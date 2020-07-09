var algovisualizer = function(canvasId,N){
    this.canvas = document.getElementById(canvasId);
    this.sceneWith = canvas.width;
    this.sceneHeight = canvas.width;
    this.ctx = this.canvas.getContext('2d');
    this.money = [];

    this.run = function(){
        for(let i=0;i<N;i++){
            this.money.push(100);
        }
        setInterval(()=>{
            for(var k=0;k<50;k++){
                for(var i=0;i<this.money.length;i++){
                    let j = parseInt(Math.random() * this.money.length);
                    this.money[i] += 1;
                    this.money[j] -= 1;
                }
            }
            this.money.sort(function(a,b){
			    return a - b;
		    });
        },100)
        requestAnimationFrame(this.draw);
        /*window.addEventListener("keydown",(e)=>{
            if(e.code=="Space"){
                this.isAnimated = !this.isAnimated
            }
        })
        this.canvas.addEventListener("mousedown",(e)=>{
            for(let i=0;i<N;i++){
                let c = this.circles[i];
                if(c.contain(e.offsetX,e.offsetY))
                    c.isFill = !c.isFill 
            }
        })*/
    }

    this.draw = (axisX) => {
        /* 清空画布(或部分清空) */
        this.ctx.clearRect(0, 0, this.sceneWith, this.sceneHeight);
        this.ctx.fillStyle = "blue";
        const w = this.sceneWith / this.money.length;
        const h = 1;
        this.ctx.beginPath();
        for(var i=0;i<N;i++){
            let m = this.money[i];
            this.ctx.rect( i*w+1, this.sceneHeight- m*h , w-2, m* h);
            this.ctx.fill()
        }
        this.ctx.closePath();
        requestAnimationFrame(this.draw);
    }
}