//Array.every()
//The every() method is available on all Arrays. 
//It is used to test whether all the items in an array pass a specified test. 
//The test is performed by executing a function that you pass into the every() method for every item in the Array.

//created two arrays with varying age ranges
let age1 = [21, 22, 25, 27];
let age2 = [26, 32, 42, 78, 50];

//console log true/false based off of if statement
console.log(
    //arrow function with array.every
    age1.every((age) => {
        return age >= 21;
    })
);

//console log true/false based off of if statement
console.log(
    //arrow function with array.every
    age2.every((age) => {
        return age < 21;
    })
);


//Array.filter()
//The filter() method is available on all Arrays. 
//It is used to create a new array with all the items that pass a test. 
//The test is performed by executing a function that you pass into the filter() method for every item in the Array.

//created an array with different values
let num1 = [2, 8, 10, 17];

//array.filter with arrow function to test values if even
let evens = num1.filter((i) => {
    return i % 2 == 0;
});

//console log each value in the array
console.log(num1);
//console log even values in the array
console.log(evens);

//created an array with different values
let num2 = [1, 6, 7, 20];

//array.filter with arrow function to test values if odd
let odd = num2.filter((i) => {
    return !(i % 2 == 0);
});

//console log each value in the array
console.log(num2);
//console log even values in the array
console.log(odd);

//Array.forEach()
//Executes a callback for each item in the array.
//The forEach method can be used instead of a for loop. 
//The code is easier to read and follow as it makes logical sense. 
//You are running a callback function "for each" item in the array.

let value = [5, 8, 12, 34, 55];

value.forEach((value, index) => {
    console.log(`The number at index ${index} is ${value}`);
});

//indexOf Array Method
//The indexOf array method returns the index position of the array where the supplied value is found. 
//If the item is not found, -1 is returned. Using this method instead of creating a loop and searching for an element yourself can save you time and make your code cleaner.

let friends = ['Nancy', 'Josh', 'Jake', 'Joanne'];

let f = friends.indexOf('Jane');
console.log(f);
f = friends.indexOf('Jake');
console.log(f);

//lastIndexOf Array Method
//The lastIndexOf array method behaves similarly to indexOf, except that it will find the last index of the array at which an element appears. 
//Using this method instead of creating a loop and searching for a value yourself can save you time and make your code cleaner.

let friends2 = ['Nancy', 'Josh', 'Jake', 'Joanne'];

let f2 = friends2.lastIndexOf('Jane');
console.log(f2);
f2 = friends2.lastIndexOf('Joanne');
console.log(f2);

//Array.map()
//Calls a function for every element in an array and returns a new array with the return value of each function call.

let names = [
    {
        fname: 'Paula',
        age: 41
    },
    {
        fname: 'Josie',
        age: 22
    },
    {
        fname: 'Patty',
        age: 33
    }
];


let doubleAge = names.map((age) => {
    return age * 2;

});

console.log(doubleAge);


let age = [41, 40, 22];

let dbleAge = age.map((age) => {
    return age * 2;

});

//console.log(names.age);  
console.log(dbleAge);


//Array.some()
//The some() method is available on all Arrays. It is used to test whether at least one of items in an array passes a specified test. 
//The test is performed by executing a function that you pass into the some() method for the items in the Array.

let noEvens = [1, 3, 5];
let oneEven = [1, 3, 4, 5];

function isEven(num) {
    console.log(num);

    return num % 2 === 0;
}

console.log(noEvens.some(isEven)); // false
console.log(oneEven.some(isEven)); // true

