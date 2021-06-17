const quickSort = (arr, start, end) => {
    let i = start, j = end;
    if (i === j || i >= arr.length) return arr;
    let pivot = i;
    while (i < j) {
        while (arr[i] <= arr[pivot] && i < end) i++;
        while (arr[j] >= arr[pivot] && j > start) j--;
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    if (pivot !== j) {
        let temp = arr[j];
        arr[j] = arr[pivot];
        arr[pivot] = temp;
    }
    arr = quickSort(arr, start, j);
    arr = quickSort(arr, j + 1, end);
    return arr;
}

let arr = [1, 5, 3, 12, 2, 7, 3, 6, 9];

console.log(quickSort(arr, 0, arr.length - 1));