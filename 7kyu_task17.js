/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 

Format:
1. Challenge ( KATA )
2. Solutions

Task: Is this a triangle?

1. Implement a function that accepts 3 integer values a, b, c. The function should return true 
if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

2. 
function isTriangle(a,b,c){
    return (a+b>c && a+c>b && b+c>a) ? true : false
 }