/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 

Format:
1. Challenge ( KATA )
2. Solutions

Task: Testing 1-2-3

1. Your team is writing a fancy new text editor and you've been tasked with implementing the 
line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct 
number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.
Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

2. 
var number=function(array){
    let result = []
    for(let i = 1; i <= array.length; i++){
      result.push(`${i}: ${array[i-1] }`)
    }
    return result
  }