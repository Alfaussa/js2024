//Binary search

let array = [1, 3, 5, 7, 9, 10, 11, 13];
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
console.log(search(array, 10))