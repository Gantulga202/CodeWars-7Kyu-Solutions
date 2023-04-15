/* 
Gantulga Enkhbat - CodeWars "7Kyu solutions" 

Format:
1. Challenge ( KATA )
2. Solutions

Task: Categorize New Member

1. DESCRIPTION:
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would 
like your help with an application form that will tell prospective members which category they 
will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this 
croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether 
the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

2. 
function openOrSenior(data){
    let arr = []
    data.forEach( item => {
      if(item[0] >= 55 && item[1] > 7){
        arr.push('Senior')
      }else{
        arr.push('Open')
      }
    } )
    return arr
  }
