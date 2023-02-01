/*
    THE MULTIPLE POINTERS PATTERN

    The idea Is creating pointers or values that correspond to an index or position
    and move towards the beginning, end or middle based on a certain condition

    very effificient for solving problems with minimal space complexity as well

    EXAMPLE:
    Write a function called sumZero which accepts a sorted array of integers.
    The function should find the first pair where the sum is 0. Return an array
    that includes both values that sum to zero or undefined iff a pair does not
    exist
*/

//naive solution
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5]);

//the above will have a time complexity of O(n**2)

//using the multiple pointers pattern,

function sumZero1(arr){
    //start two pointer, one at the begining of the array and one at the end as we
    //already know that the beginiing is the smallest and the end is the largest.

    let left = 0;
    let right = arr.length - 1;

    //loop through the pointers
    while(left < right){
        //check if sum of the current index on the two sides is 0
        let sum = arr[left] + arr[right];
        //console.log([arr[left], arr[right]])
        if(sum === 0){
            //if zero return
            return [arr[left], arr[right]];
        }else if(sum > 0){
            //if it's greater than zero, subtract from the right and loop
            right--;
        }else{
            //if it's less than zero, add to tehe right and loop
            left++;
        }
    }
}

sumZero1([-4,-3,-2,-1,0,1,2,5]);

/*
    MULTIPLE POINTERS: COUNT UNIQUE VALUES
    Example: Implement a function called CountUniqueValues, which accepts a 
    sorted array, and counts the unique values in the array. There can be negative
    numbers in the array, but it will always be sorted.

    My Solutions:
    function countUniqueValues(arr){
        let freq = {};
        for(let numb of arr){
            freq[numb] = (freq[numb] || 0) + 1;
        }
        return Object.keys(freq).length;
    }

    function countUniqueValues(arr){
    //create two pointers
    let total = 0;
    let pointer1 = 0;
    let pointer2 = pointer1 + 1;

    //check consecutive pointers to see if the same
    for(let i = 0; i < arr.length; i++){
        if(arr[pointer1] === arr[pointer2]){
            total += 0;
            pointer1 ++;
            pointer2 ++
        }else{
            total += 1;
            pointer1 ++;
            pointer2 ++;
        }
    }

    return total;

}
*/


function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    }

    var i = 0;
    for(var j = 1; j < arr.length; j++){
        //check if the values are unique
        if(arr[i] !== arr[j]){
            //if they are, increment the index of the array by one
            //and replace with the unique value
            i++;
            arr[i] = arr[j];
        }
    }

    //return the count of the unique values
    return i + 1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));