/*
    WHAT IS RECURSION?
    A process/function that calls itself

    WHY USE RECURSION?
    *It's Everywhere
        - JSON.parse / JSON.stringify is often written recursively
        - document.getElementById and DOM traversal algorithms
        - Object traversal
        - It's sometimes a cleaner alternative to iteration

    WHAT HAPPENS BEHIND THE SCENES WHEN FUNCTIONS ARE CALLED?

    - In almost all program languages , there's a built in data structure that
    manages what happens when functions are invoked.
    - In javascript it's called the call stack
    - It a stack data structure
    - Anytime a function is invoked it is placed (pushed) on the top of the call
    stack
    - When Javascript sees the return keyword or when the function ends, the
    compiler will remove(pop)

    WHY DO I CARE ABOUT RECURSION?
    - You're used to functions being pushed on the call stack and popped off 
    when they're done
    - When we write recursive functions, we keep pushing new functions onto the
    call stack

    Recursive Function Example:
    function sumRange(num){
        if(num === 1) return 1;
        return num + sumRange(num-1)
    }

    //explain
    1. sumRange(3) // the value of the first recursion below
    2.     return 3 + sumRange(2) //value of sumRange(2) is 2 + 1 below: 3
    3.                    return 2 + sumRange(1) //value of sumRange(1) is 1
    4.                                     return 1

    From the above, the function calls itself  with a new value until a base case
    in this case 1 is reached. This base case is the value to be added to number 3
    which was waiting for it's value to be used. Then the result of this addtion
    is supplied to the first recursion call and the value is returned which gives
    the sumRange we need .

    So until a base case is reached, each recursion call waits for the value of
    the next call. When the base case is reached, the value is then supplied to
    the most recent recursive vcall to get a result and the result is used for the
    next call till the first case is reached.

*/