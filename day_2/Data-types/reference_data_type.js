// reference data-type also called as non-primitive data-type

let list = ['array', 1.09, 8, true, null, undefined];

let obj = {
    name: 'sibi',
    age: 20,
    city: 'chennai'    
}



// Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created. Let us see by creating an array. An array is a list of data values in a square bracket. Arrays can contain the same or different data types. Array values are referenced by their index. In JavaScript array index starts at zero. I.e., the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc.
let nums = [5, 65, 7]
nums[0] = 11

console.log(nums)  


// As you can see, an array, which is a non-primitive data type is mutable. Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) 


// Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

let nums = [1, 2, 3]
let number = nums

console.log(nums == number)  

let user1 = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let user2 = userOne

console.log(userOne == userTwo)  