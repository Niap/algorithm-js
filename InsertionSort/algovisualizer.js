
var algovisualizer = function(canvasId){
    this.canvas = document.getElementById(canvasId);
    this.sceneWith = canvas.width;
    this.sceneHeight = canvas.width;
    this.ctx = this.canvas.getContext('2d');

    var data = new IsertionSortData(100,100);

    this.run = function(){
        var i=0;
        setInterval(function(){
            if(i < data.N()){
                for(var j=i;j >0 && data.get(j)<data.get(j-1);j--){
                    data.swap(j,j-1);
                }
                data.orderedIndex = i;
                i++;
            }
        },100)
        requestAnimationFrame(this.draw);
    }

   /* 清空画布(或部分清空) */
    this.draw = (axisX) => {
        this.ctx.clearRect(0, 0, this.sceneWith, this.sceneHeight);
        
        const w = this.sceneWith / data.N();
        const h = 1;
        for(var i=0;i<data.N();i++){
            this.ctx.beginPath();
            if(i<= data.orderedIndex ){
                this.ctx.fillStyle = "orange";
            }else{
                this.ctx.fillStyle = "blue";
            }
            let m = data.get(i);
            this.ctx.rect( i*w+1, this.sceneHeight- m*h , w-2, m* h);
            this.ctx.fill()
            this.ctx.closePath();
        }
        requestAnimationFrame(this.draw);
    }
}