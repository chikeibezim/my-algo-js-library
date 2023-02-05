/*
    This pattern ivolves dividing a data set into smaller chunks and then
    repeating a proces with a subset of data

    This pattern can tremendously decrease time complexity

    Example:
    Given a sorted array of integers, write a function called search,
    that acepts a value and returns the index where the value passed to the
    function is located. If the value is not found, return -1
*/

//naive approach - using linear search
function search(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}

//console.log(search([1,2,3,4,5,6], 7));

//better approach - using binary search (divide and conquer)
//just the idea
function search(arr, val){
    let min = 0;
    let max = arr.length - 1;

    while(min <= max){
        let middle = Math.floor(min + max) / 2;
        let currentElement = arr[middle];

        if(arr[middle] < val){
            min = middle - 1;
        }else if(arr[middle] > val){
            max = middle - 1;
        }else {
            return middle
        }
    }

    return -1;
}

function areThereDuplicates(...values) {
    let arr = values;
   //create two pointers
   let pointer1 = 0;
   let pointer2 = pointer1 + 1;
   //loop through the first and compare with the next
   for(let i = 0; i < arr.length; i++){
       if(arr[i] === arr[pointer2]){
           return true;
       }
       
       pointer2++;
   }
   //if the same, return true
   return false
}

console.log(areThereDuplicates('a', 'b', 'c', 'a'))