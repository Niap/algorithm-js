function merge(arr, start, mid, end) {
    let temp = [];
    let len = 0;
    let i = start, j = mid + 1;
    for (; i <= mid && j <= end;) {
        if (arr[i] > arr[j]) {
            temp[len++] = arr[j++];
        } else {
            temp[len++] = arr[i++];
        }
    }
    while (i <= mid) {
        temp[len++] = arr[i++];
    }
    while (j <= end) {
        temp[len++] = arr[j++];
    }
    for (let t = 0; t < len; t++) {
        arr[t + start] = temp[t];
    }
}

function mergeSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let mid = start + parseInt((end - start) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);

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
                mergeSort(e.data.numbers,0,e.data.numbers.length-1)
            break;
    }
}, false);
