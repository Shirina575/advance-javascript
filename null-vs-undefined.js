let undefined;
console.log(undefined); // out is undefined since no value is assigned to the variable undefined

function add(num1, num2){
    console.log(num1 + num2);
}

const sum = add(5, 7);
console.log(sum); //output is undefined. add() doesn't return any value

const result = add(15);
console.log(result);// undefined. add() function is missing one parameter 

const object = {name: 'abc'};
console.log(object.phone);//undefined. phone properties doesn't exist in object

let fun = undefined;
console.log(fun); // undefined

// where null is set by the developer when there's an empty variable or a variable is becoming empty