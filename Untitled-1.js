//Binary search

/*let array = [1, 3, 5, 7, 9, 10, 11, 13];
let search = function(arr, target){
    let left = 0; 
    let right = arr.length - 1;
    let mid;

    while (left <= right){
        mid = Math.round((right - left)/2) + left;
        if (target === arr[mid]){
            return mid;
        } else if (target < arr[mid]){
            right = mid - 1;
           
        } else {
            left = mid + 1;
        }
      
    }
    return - 1 ;
}
console.log(search(array, 10))*/

//Selection sort



/*function selectionSort(arr) {
    const {length} = arr;
    for (let i = 0; i < (length - 1); i++){
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
    if (minIndex!==i){
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex]= temp;
        } 
    }
    return arr;
}
const arr = [3, 2, 6, 4, 8, 5, 9, 10];
const result = selectionSort(arr);
console.log(result);*/

// Recurtion

let t=0;
function f1(){
    t++;
    if (t === 100) return
    f1();
}