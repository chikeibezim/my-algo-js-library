/*
    E.g.
    Given two strings, write a function to determine if the second string is an 
    anagram of the first. An anagam is a word, phrase  or name formed by rearranging
    the letters of another, such as cinema, formed from iceman
*/

function anagram(string1, string2){
    //check the lengths
    if(string1.length != string2.length){
        return false
    }
    
    //create two objects to store the frequency of each string
    let frqString1 = {};
    let frqString2 = {};

    //loop thorugh each string to store the values of each frequency
    for(let val of string1){
        frqString1[val] = (frqString1[val] || 0 ) + 1
    }

    for(let val of string2){
        frqString2[val] = (frqString2[val] || 0) + 1
    }

    //compare the frequencies of each values and check the keys 
    for(let key in frqString1){
        if(!(key in frqString2)){
            return false
        }

        if(frqString2[key] !== frqString1[key]){
            return false
        }
    }

    //console.log("This is an anagram");
    return true
    
}

anagram("anagram", "nagaram");

//another solution
function solveAnagram(string1, string2){
    //check the length to make sure it's the same
    if(string1.length != string2.length){
        return false
    }

    //create an object to save the frequeny of each string
    let dict  = {};

    for(let val of string1){
        dict[val] ? dict[val] += 1 : dict[val] = 1;
    }

    console.log(dict)
    //loop through the second string and check for occurrence
    for(let word of string2){
        //check if the word exist in the object if it's zero or non-existent
        if(!dict[word]){
            return false
        }else{
            //subtract the occurence
            dict[word] -= 1;
        }
        
    }

    console.log("This is an anagram")
    return true
}

solveAnagram("anagram", "nagaram");