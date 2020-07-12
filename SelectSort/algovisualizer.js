
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

var algovisualizer = function(canvasId){
    this.canvas = document.getElementById(canvasId);
    this.sceneWith = canvas.width;
    this.sceneHeight = canvas.width;
    this.ctx = this.canvas.getContext('2d');

    var data = new SelectSortData(100,100);

    this.run = function(){
        var i=0;
        setInterval(function(){
            if(i < data.N()){
                var minIndex = i;
                for(var j=i;j<data.N();j++){
                    if( data.get(j) < data.get(minIndex) ){
                        minIndex = j;
                    }
                }
                data.swap(i,minIndex);
                i++;
            }
        },10)
        requestAnimationFrame(this.draw);
    }

   /* 清空画布(或部分清空) */
    this.draw = (axisX) => {
        this.ctx.clearRect(0, 0, this.sceneWith, this.sceneHeight);
        this.ctx.fillStyle = "blue";
        const w = this.sceneWith / data.N();
        const h = 1;
        this.ctx.beginPath();
        for(var i=0;i<data.N();i++){ 
            let m = data.get(i);
            this.ctx.rect( i*w+1, this.sceneHeight- m*h , w-2, m* h);
            this.ctx.fill()
        }
        this.ctx.closePath();
        requestAnimationFrame(this.draw);
    }
}