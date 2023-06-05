/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 

Format:
1. Challenge ( KATA )
2. Solutions

Task: Two to One

1. Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

2. 
function longest(s1, s2) {
    let result = []
    let str = (s1+s2).split('')
    str.forEach( item => {
      if(result.includes(item) === false ){
        result.push(item)
      }
    } )
    return result.sort().join('')
  }