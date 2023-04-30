/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 

Format:
1. Challenge ( KATA )
2. Solutions

Task: Anagram Detection

1. An anagram is the result of rearranging the letters of a word to produce a new word 
(see wikipedia).

Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; 
return false otherwise.

Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

2. 
var isAnagram = function(test, original) {

    let teSorted = test.toLowerCase().split('').sort()
    let orSorted = original.toLowerCase().split('').sort()
    let result = 0
  
    if (teSorted.length === orSorted.length) {
    for(let i = 0; i < teSorted.length; i++){
      result += teSorted[i] === orSorted[i] ? 1 : 0
      }
     }
    return result === orSorted.length
  };