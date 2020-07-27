var IsertionSortData = function(N,randomBound){
    var numbers = [];

    this.orderedIndex = -1;

    for(var i=0;i<N;i++){
        numbers.push( parseInt( Math.random() * randomBound ) +1 );
    }

    this.N = function(){
        return numbers.length;
    }
    this.get = function(index){
        if(index < 0 || index >numbers.length){
            throw new Error("Error bounds");
        }
        return numbers[index];
    }
    this.swap = function(i,j){
        var temp = numbers[i];
        numbers[i]= numbers[j];
        numbers[j] = temp;
    }
}