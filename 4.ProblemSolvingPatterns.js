//MASTER COMMON PROBLEM SOLVING PATTERNS
//patterns are like blueprints to solving a problem
/*
    Some Patterns:
    i. Frequency Counter Patterns
        - The idea is we use an object to basically collect a bunch of values and their frequencies
        - It avoids the need for nested loops which usually results onin O(n^2)
        - Used when comparing two values and the frequency of each value matters
        Example:
        Wtite a function same, which acepts two arays. The function should return true
        if every value in the array has it's corresponding value squared in the second
        array. The frequency of values must be the same.
 */

    //the function will take in two arrays
    //below will be the naive approach which takes a time complexity of 0(n^2)
    //because its a nested for loop

    function same(arr1, arr2){
        //check if the two arrays are the same length
        if(arr1.length != arr2.length){
            return false;
        }

        //loop through the first array
        for(let i = 0; i < arr1.length; i++){
            //get the index of the square of each value
            let correctIndex = arr2.indexOf(arr1[i] ** 2); //indexof is a forloop

            //check if there's a valid index
            if(correctIndex === -1){
                return false
            }
            //else, if index exists, remove the index from the array
            arr2.splice(correctIndex,1);
        }
        return true;

    }

    same([2,5,5],[4,25,25]);

    //using frequency counter, instead of the first
    //we can loop over each array once time individually
    //two seperate loops is better than two nested loops O(n)
    //here we use an object
    //each one will count the frequency of individual values in the arrays
    

    function same1(arr1, arr2){
        //check to see if array lengths are the same
        if(arr1.length !== arr2.length){
            return false;
        }

        //create objects to store frequency
        let frequencyCounter1 = {};
        let frequencyCounter2 = {};

        //loop over the values in the array and insert the frequency into the object
        for(let val of arr1){
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; //check if key exists in object
        }

        for(let val of arr2){
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
        }

        //loop over the first object
        for(let key in frequencyCounter1){
            //check if the square of key in first object is a key in the second object
            if(!(key ** 2 in frequencyCounter2)){
                return false;
            }
            //check if the frequency of the squared of each key in frequencyConter2 is 
            //same as the frequency in frequencyConter1
            if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
                return false;
            }
        }
        return true;
        
    }