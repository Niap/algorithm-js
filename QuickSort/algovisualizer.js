
var QuickSortData = function(N,randomBound){
    this.numbers = [];
    this.orderedIndex = -1;
    for(var i=0;i<N;i++){
        this.numbers.push( parseInt( Math.random() * randomBound ) +1 );
    }
}

var algovisualizer = function(canvasId){
    this.canvas = document.getElementById(canvasId);
    this.sceneWith = canvas.width;
    this.sceneHeight = canvas.width;
    this.ctx = this.canvas.getContext('2d');

    var data = new QuickSortData(100,100);

    this.run = function(){
        var woker = new Worker("./QuickSort.js")
        woker.onmessage = function(event){
            data.numbers = event.data.numbers;
        }
        woker.postMessage({cmd:"start",numbers:data.numbers})
        requestAnimationFrame(this.draw);
    }

   /* 清空画布(或部分清空) */
    this.draw = (axisX) => {
        this.ctx.clearRect(0, 0, this.sceneWith, this.sceneHeight);
        
        const w = this.sceneWith / data.numbers.length;
        const h = 1;
        for(var i=0;i<data.numbers.length;i++){
            this.ctx.beginPath();
            if(i<= data.orderedIndex ){
                this.ctx.fillStyle = "orange";
            }else{
                this.ctx.fillStyle = "blue";
            }
            let m = data.numbers[i];
            this.ctx.rect( i*w+1, this.sceneHeight- m*h , w-2, m* h);
            this.ctx.fill()
            this.ctx.closePath();
        }
        requestAnimationFrame(this.draw);
    }
}