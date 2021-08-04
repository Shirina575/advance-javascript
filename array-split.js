const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const partOfNums = nums.slice(2, 5);
console.log(partOfNums);
console.log(nums);
const removedFromNums = nums.splice(5, 2, 22, 33); // splice can also be used to join some element in the array from which position it removes some element
console.log(removedFromNums);
console.log(nums);

// const together = nums.join(''); 
// it will join every element in one string. we can also put white space or , between two elements as follows
const together = nums.join(',');
console.log(together);