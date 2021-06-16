
const merge = (leftArr, rightArr) => {
    let i = 0, j = 0, res = [];
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            res.push(leftArr[i]);
            i++;
        }
        else {
            res.push(rightArr[j]);
            j++;
        }
    }
    while (i < leftArr.length) {
        res.push(leftArr[i]);
        i++;
    }
    while (j < rightArr.length) {
        res.push(rightArr[j]);
        j++;
    }
    return res;
}


const mergeSort = (arr, i, j) => {
    if (i === j) return [arr[i]];
    let mid = parseInt((i + j) / 2);
    let leftSubArray = mergeSort(arr, i, mid);
    let rightSubArray = mergeSort(arr, mid + 1, j);
    let aux = merge(leftSubArray, rightSubArray);
    return aux;

}


let arr = [1, 5, 3, 12, 2, 7, 4, 6, 3, 9];

console.log(mergeSort(arr, 0, arr.length - 1));