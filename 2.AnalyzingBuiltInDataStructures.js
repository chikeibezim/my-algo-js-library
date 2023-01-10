/*
    Let's spend some few minutes aalyzing the things we do
    all the time in JS: working with Arrays, objects, and built-in methods.

    What are the easy things
    what are the methods and how fast they are
*/

/*
    Discuss OBJECTS
    When to use objects:
    i. When you don't need ordering
    ii. When you need fast access / insertion and removal 
    BigO of objects
    i. Insertion - O(1)
    ii. Removal - O(1)
    iii. Searching - O(n)
    iv. Access - O(1)

    BigO of Object Methods:
    i.object.keys - O(n)
    ii. object.values - O(n)
    iii. object.entries - O(n)
    iv. hasOwnProperty - O(1)
*/

/*
    Discuss ARRAYS
    When to use arrays
    i. When you need ordering
    
    BigO of arrays.
    i. Insertion - Depends (array.push is constant time), problem is when you try to insert to beginning of array
    ii. Removal - Depends
    iii. Searching - O(n)
    iv. Access - O(1)

    BigO of array methods
    i. push - O(1)
    ii. pop - O(1)
    iii. shift - O(n)
    iv. unshift - O(n)
    v. concat - O(n)
    vi. slice - O(n)
    vii. splice - O(n)
    viii. sort - O(n*logN)
    ixff. forEach/map/filter/reduce - O(n)
*/