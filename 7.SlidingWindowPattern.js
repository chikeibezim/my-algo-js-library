/*
    SLIDING WINDOW PATTERN
    This pattern involves creating a window which can either be an array or
    number from one posiiton to another.
    Depending on a certain condition, the window either increases or closes (and
    a new window is created)

    Very useful for keeping track of a subset of data in an array/string e.t.c

    An Example:
    Write a funnction called maxSubarraySum which accepts an arrau of integers and a 
    numver called n. the function should calculate the maximum sum of n consecutive
    elements in te array.
*/

//naive solution
function maxSubarraySum(arr, num){
    //make sure the number is less than the arr length
    if(num > arr.length){
        return null;
    }

    //set max to negative beacuse the arr could be negative
    var max = -Infinity;

    //create a loop that goes almost to the end of the array
    //subtract the number to check from the array length to make sure we 
    //dont check for values over our limit
    for(let i = 0; i < arr.length - num + 1; i++){

        //create a temporary store for the sum of each loop
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i + j];
        }

        //check if the sum is greater than the max;
        //if it is, set max to the sum
        if(temp > max){
            max = temp;
        }
        console.log(temp, max)
    }
    return max
    
}

//console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));

//the above is a double loop which means if we have a really wroong array, it 
//will take so much time
//the time complexity is 0(n**2) which is quite large

/*
    Sliding Window approach

*/

function maxSubarraySum1(arr,num){
    //set two variables. One to hold a temp sum and another to hold the max sum
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null

    //get the sum of the first values corresponding to the argument (num)
    //set this as the max value
    for(let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    
    //set maxSum as the temporary sum for the checks to be done
    tempSum = maxSum;

    //loop through the array starting from the index after the summation above
    for(let i = num; i < arr.length; i++){
        console.log(tempSum, maxSum)
        //for each next value, subbtract the value of the starting index from temp sum
        //and add the value of the current index
        tempSum = tempSum - arr[i - num] + arr[i];

        //set maxSum to be maximum between the tempsum and the formerly set maxSum
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum1([1,2,5,2,8,1,5], 2));
