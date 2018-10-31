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
