/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 
Format:
1. Challenge ( KATA )
2. Solutions
Task: Highest and Lowest

1. In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

2. 
function highAndLow(numbers){
  let sorted = numbers.split(' ').sort( (a,b)=> b-a )
  let max = sorted[0]
  let min = sorted[sorted.length-1]
  return `${max} ${min}`
}
