function partition(arr, l, r) {
   var v = arr[l];
   var j = l;// arr[l+1...j] < v ; arr[j+1...i] > v
   for(var i=l+1;i<=r;i++){
       if(arr[i] < v){
           j++;
           swap(arr,j,i);
       }
   }
   swap(arr,l,j);
   return j;
}

function swap(arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function quickSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    var p = partition(arr,l,r);
    quickSort(arr, l, p-1);
    quickSort(arr, p+1, r);
 
    var startTime = new Date().getTime();
    var endTime = new Date().getTime();
    while(endTime - startTime < 100) {
        endTime = new Date().getTime();
    }
    self.postMessage({cmd:"refreshData",numbers:arr});
}



self.addEventListener('message', function (e) {
    switch(e.data.cmd){
        case "start":
                quickSort(e.data.numbers,0,e.data.numbers.length-1)
            break;
    }
}, false);
