/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 

Format:
1. Challenge ( KATA )
2. Solutions

Task: Simple Fun #176: Reverse Letter

1. Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.
[output] a string

*/

2. 
function reverseLetter(str) {
    return str.toLowerCase().split('').filter(item=> item >='a' && item<='z').reverse().join('')
  }