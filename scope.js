// Hoisting is JavaScript's default behavior of moving declarations to the top.

//A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block. It can't be accessed outside the scope.

function sum(first, second){
    let result = first + second;
    if (result == 8) {
        var newResult = 10;
    }
    console.log(newResult);
    return result;
}

const output = sum(3, 5);
console.log(output);