// 1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

// let firstName = "sibi";
// let lastName = "raj";
// let country = "India";
// let city = "Chennai";
// let age = 20;
// let isMarried = false;

// console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried);

// 2.Check if type of '10' is equal to 10

// console.log(typeof '10' == typeof 10);

// 3.Check if parseInt('9.8') is equal to 10
// console.log(parseInt('9.8')==10);

// 4.Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

// truthy value
// console.log(10<100);
// console.log("sibi".length > "raj".length);
// console.log('10'== 10);

// falsy value
// console.log(100<20);
// console.log(0===false);
// console.log('10'=== 10);

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.

//   console.log(4>3);
//   console.log(4>=3);
//   console.log(4<3);
//   console.log(4<=3);
//   console.log(4<=3);
//   console.log(4 == 4);
//   console.log(4 === 4);
//   console.log(4 === 4);
//   console.log(4 != 4);
//   console.log(4 !== 4);
//   console.log(4 != '4');
//   console.log(4 == '4');
//   console.log(4 === '4');

// 6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python


// console.log(4 > 3 && 10 < 12);
// console.log(4 > 3 && 10 > 12);
// console.log(4 > 3 || 10 < 12);
// console.log(4 > 3 || 10 > 12);
// console.log(!(4 > 3));
// console.log(!(4 < 3));
// console.log(!(false));
// console.log(!(4 > 3 && 10 < 12));
// console.log(!(4 > 3 && 10 > 12));
// console.log(!(4 === '4'));
// console.log('python'.includes('on'),'dragon'.includes('on'));

// 7.Use the Date object to do the following activities
// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.


// const now = new Date();
// console.log("Year:", now.getFullYear());
// console.log('Month',now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());  
// console.log("Seconds since Jan 1, 1970:", Math.floor(Date.now() / 1000));


// EXERCISE LVL 2:

//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

// let userBaseInp = prompt('Enter base');
// let userheightInp = prompt('Enter height');
// let area = 0.5 * userBaseInp * userheightInp;
// console.log(area);


// 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// const sideA = parseFloat(prompt("Enter the length of side A:"));
// const sideB = parseFloat(prompt("Enter the length of side B:"));
// const sideC = parseFloat(prompt("Enter the length of side C:"));
// const perimeter = sideA + sideB + sideC;
// console.log(`The perimeter of the triangle is ${perimeter}`);


// 3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = prompt("Enter the lenght of rectangle:");
// let width = prompt("Enter the width of rectangle:");
// let area = length * width ;
// let parameter =  (2 * (length + width));
// console.log(area);

// 4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14

// const radius = parseFloat(prompt("Enter the radius of the circle:"));
// const pi = 3.14;
// const area = pi * radius * radius;
// const circumference = 2 * pi * radius;
// console.log(`Area of the circle: ${area}`);
// console.log(`Circumference of the circle: ${circumference}`);


// 5.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120


// const hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
// const hourlyRate = parseFloat(prompt("Enter the hourly rate:"));
// const totalPay = hoursWorked * hourlyRate;  
// console.log(`Total Pay: ${totalPay.toFixed(2)}`);

// 6.If the length of your name is greater than 7 say, your name is long else say your name is short.

// const name = prompt("Please enter your name:");
// if (name) {
//     if (name.length > 7) {
//       console.log("Your name is long.");
//     } else {
//       console.log("Your name is short.");
//     }
//   } else {
//     console.log("You didn't enter a name.");
//   }


// 7.Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

// let firstName = 'Asabeneh';
// let lastName = 'Yetayeh';

// if (firstName.length > lastName.length) {
//   console.log(`Your first name, ${firstName}, is longer than your family name, ${lastName}.`);
// } else if (firstName.length < lastName.length) {
//   console.log(`Your family name, ${lastName}, is longer than your first name, ${firstName}.`);
// } else {
//   console.log(`Your first name, ${firstName}, and your family name, ${lastName}, are of equal length.`);
// }

// 8.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250  
// let yourAge = 25
// I am 225 years older than you.

// let myAge = 250;
// let yourAge = 25;
// let ageDifference = myAge - yourAge;
// console.log(`I am ${ageDifference} years older than you.`);

// 9.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.


// const birthYear = parseInt(prompt("Enter your birth year:"));


// const currentYear = new Date().getFullYear();


// if (isNaN(birthYear)) {
//   console.log("Please enter a valid year.");
// } else {

//   const age = currentYear - birthYear;


//   if (age >= 18) {
//     console.log(`You are ${age}. You are old enough to drive.`);
//   } else {
//     const yearsToWait = 18 - age;
//     console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} year${yearsToWait > 1 ? 's' : ''}.`);
//   }
// }


// 10.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.

let years = prompt("Enter number of years you live:");
years = parseInt(years);
let secondsLived = years * 365 * 24 * 60 * 60;
alert(`You lived ${secondsLived} seconds.`);














  








