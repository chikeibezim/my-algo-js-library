/* 
    the idea behind big0 notation:
    i. A way of generalizing code and it's performance to other pieces of code
   ii. Having a numumeric representation of the performance of code

   Who Cares:
   i Important to have a precise vocalbulary to talk about how our code performs
   ii. Useful for discussing trade-offs between different approaches
   iii. Helps to find pain points in our applications for inefficient codes
*/

/*
 Example, look at the two functions below and see which one runs better?
 What does better mean?
    i. Faster
    ii. Less memory-intensive
    iii. More Readable

    The first two are more important than the third
*/

//1
function addUpTo(n){
    let result = 0;
    for(let i = 1; i <= n; i++){
        result += i;
    }

    return result;
}

//2
function addUpTo2(n){
    return n * (n + 1) / 2;
}


//analyze the first code
var t1 = performance.now();
addUpTo(10000000);
var t2 = performance.now();
console.log(`Time Elapsed for first function: ${(t2 - t1) / 1000} seconds`);

//analyze the second code
var t3 = performance.now();
addUpTo2(10000000);
var t4 = performance.now();
console.log(`Time Elapsed for second function: ${(t4 - t3) / 1000} seconds`);

/*
    Timing the performance and comparing like we did above is not 
    really efficient and easy to talk about.
    How would we actually write down how one is better than the other?
    This brings us to the problem with time, which are:
        i. Different machines will record different times
        ii. The same machine will record different times
        ii. For fast algortihms, speed measurements may not be precise enough
    
    In general terms, how do we compare code without using time:
    Answer:
    Rather than counting seconds, let's count the number of simple operations
    the computer has to perform. E.G multiplication, addition, assigments or division e.t.c

    Counting is hard so we're really focusing on the bigger picture 
    The number of operations grows proportionally with n

*/

/*
    Big0 Notation is the relationship between the 
    input size and the time relative to the input or runtime

    e.g
    f(n):
    could be linear (f(n) = n)
    could be quadratic (f(n) = n^2)
    could be constant (f(n) = 1)
    or something entirely different

    When we taalk about BigO, we are talking about the worst case scenario
    Basically the upper-bound for runtime
*/

/*
    From our second function above,
    We can say we have the big0 of 1 i.e O(1) --- which means
    as n grows, there's no change in the runtime

    From the 1st function
    The number of operations is bounded by a multiple of n i.e O(n)


    For example, in a nested loop with two for loops, the bigO is O(n^2) i.e n squared
*/

/*
    Simplifying BigO Expressions
    Rules:
        i. constants Don't matter
            e.g:
            0(2n) is simplified to O(n)
            0(500) is O(1)
            O(13n^2) is O(n^2)
        ii. smaller terms don't matter
            e.g:
            O(n + 10) is O(n)
            0(n^2 + 5n + 8) is O(n^2)
    Shorthands:
        i. Arithmetic operations are constant
        ii. Variable assignment is constant
        iii. Accessing elements in an array is cnstant
        iv. In a loop, the complexity is the length of the loop times the complexity
            f whatever happens inside of the loop

    All that has been discussed above is the time complexity of an algorithm
*/

/*
  Space Complexity: amount of memory taken up

  Auxilliary space complexity is the space required by the algo, not including the space taken up by the input
  focusing on what happens inside the algorithm

  *Most Primitive data types (booleans, numbers, undefined, null) are constant space
  *Strings require O(n) space where space is the string length
  *Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

  E.g: take a look at the function below:
 */

  function sum(arr){
    let total = 0;
    for(let i = 0; i <= arr.length; i++){
        total += arr[i]
    }
    return total;
  }

  sum([2,4,2,5,6])

  /*
    In the above we're focusing on space complexity
    What are the things that take up space
    *Check for variables that are declared and what happens to them.
    *In the above, we've initalized total and i (inside the for loop)
    *These two variables exists no matter what and changes in the input does not affect the size
    *Hence the time complexity is constant - O(1)

    now take a look at the example below
  */

function double(arr){
    let newArr = [];
    for(let i = 0; i <= arr.length; i++){
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
    
sum([2,4,2,5,6])

/*
    The space taken up is directly proportional to the input - O(n)
    Review later
*/


/*
    LOGRATHIMS

    A logarthim is the inverse of exponentiation 
    like log2(8) = 3
    Means what power to raise by 2 to get 8
    *log === log2
    We are omiting 2 because of the big O notation, it's really unneccessary since we're looking at the big picture

    log complexity is really great! Closest to a constant time complexity

    Who Cares:
    *Searchng algortithms
    *Efficient sorting algorithms
    *Recursion sometimes imvolves log space complexity
*/