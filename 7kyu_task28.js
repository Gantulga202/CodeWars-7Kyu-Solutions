/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 

Format:
1. Challenge ( KATA )
2. Solutions

Task: Remove anchor from URL

1. Complete the function/method so that it returns the url with anything after the anchor (#) 
removed.
Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

2. 
function removeUrlAnchor(url){
    let arr = url.split('')
    return arr.includes('#') ? arr.slice(0, arr.findIndex(e=>e==='#')).join('') : url
  }