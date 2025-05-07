// Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word get because it provide the information. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()

// Creating a time object
// const now = new Date()
// console.log(now) 

// Getting full year
// const now = new Date()
// console.log(now.getFullYear()) 


// Getting month
// const now = new Date()
// console.log(now.getMonth())


// Getting date
// const now = new Date()
// console.log(now.getDate()) 

// Getting day
// const now = new Date()
// console.log(now.getDay())


// Getting hours
// const now = new Date()
// console.log(now.getHours())

// Getting minutes
// const now = new Date()
// console.log(now.getMinutes()) 

// Getting seconds
// const now = new Date()
// console.log(now.getSeconds()) 

// Getting time
// const now = new Date() 
// console.log(now.getTime()) 


const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
