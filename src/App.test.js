/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
    return str.toLowerCase().split(' ').map((str)=>`${str[0].toUpperCase() + str.slice(1)}`).join(' ')
 
  }
  
  console.log(titleCase("sHoRt AnD sToUt"));
  