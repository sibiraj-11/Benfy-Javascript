// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
let string = '30 Days Of JavaScript';
console.log(string.includes('Days'));  
console.log(string.includes('days'));    
console.log(string.includes('Script'));    
console.log(string.includes('script'));   
console.log(string.includes('java'));     
console.log(string.includes('Java'));     

let country = 'Finland';
console.log(country.includes('fin')); 
console.log(country.includes('Fin')); 
console.log(country.includes('Land')); 