// The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.


// && ampersand operator example

const check1 = 4 > 3 && 10 > 5        
const check2 = 4 > 3 && 10 < 5      
const check3 = 4 < 3 && 10 < 5       
// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5      
const check5 = 4 > 3 || 10 < 5     
const check6 = 4 < 3 || 10 < 5      

//! Negation examples

let number1 = 4 > 3                     // true
let number2 = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true