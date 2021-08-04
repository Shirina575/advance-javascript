const numbers = [4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

function square(element){
    return element * element;
}
// same function using array function 
const arraySquare = element => element * element;

const result = numbers.map(square);
// same as line 16

const resultUsingArrow = numbers.map(element => element * element);

console.log("Using Normal function" + result);

console.log("Using Arrow function" + resultUsingArrow);

            // End of use of map in array
            // Start of use of filter in array   
const bigger = numbers.filter(element => element > 5);

console.log(bigger);

            // End of use of filter in array
            // Start of use of find in array
const isThere = numbers.find(element => element > 6);

console.log(isThere);