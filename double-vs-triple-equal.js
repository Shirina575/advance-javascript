// == doesn't check data types whereas === checks both value and data types
const first = 2;
const second = 3;

const secondStr = "2";

if (first == second) {
    console.log('Condition is true.');
}if (first == secondStr) {
    console.log('condition is false');
}if (first === secondStr) {
    console.log('condition is true');
} else {
    console.log('Condition is false');
}