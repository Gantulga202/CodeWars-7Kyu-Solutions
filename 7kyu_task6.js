/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 

Format:
1. Challenge ( KATA )
2. Solutions

Task: Reverse words

1. Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

2. 
function reverseWords(str) {
    let arr = []
    let nStr = str.split(' ')
    for(let i = 0; i < nStr.length; i++){
      arr.push(nStr[i].split('').reverse().join(''))
    }
    return arr.join(' ')
    }
