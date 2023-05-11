/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 

Format:
1. Challenge ( KATA )
2. Solutions

Task: Find the capitals

1. Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered 
list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

2. 
var capitals = function (word) {
    let index = word.split('')
    let capitalLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let result = []
  
  index.forEach( e => {
    if(capitalLetter.includes(e) === true){
      result.push(index.indexOf(e))
    }
  })
  return result
};