/*
    WRITING FACTORIAL ITERATIVELY
*/

function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total
}

/*
    WRITING FACTORIAL RECURSIVELY
*/

function factorial(num){
    if(num === 1 ) return 1;
    return num * factorial(num - 1)
}

/*
    WHERE THINGS GO WRONG
    - When there's no base case in the recursion
    - Forgetting to return or returning the wrong thing
    When the abve happens, it can result in a stack overflow

*/

/*
    HELPER METHOD RECURSION
    This is when we crate a recursive function inside of an outer function.
    For example
    function outerFunct(arr){
        let result = [];

        function recursiveCall(input){
            //base case and processes
            recursiveAll(newInput)
        }

        recursiveCall(arr)

        return result;
    }

    You can use this when there's a value outside of the call that you need.
    In the example above, if the result array was used inside the recursive
    call, it'll be empty for every call made and thus won't return a valid result.
*/