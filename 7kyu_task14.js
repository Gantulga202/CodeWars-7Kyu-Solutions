/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 

Format:
1. Challenge ( KATA )
2. Solutions

Task: Shortest Word

1. Task: Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

2. 
function findShort(s){

    let shortest = s.split(' ').sort((a,b)=> a.length-b.length)[0]
    return shortest.length
  }