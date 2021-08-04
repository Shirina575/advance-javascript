// False condition false, 0, '', undefined, null, NaN

//True condition true, '0', ' ' empty array, object without any property
const age = 4;
const name = '0';

if (name.length > 0) {
    console.log('Condition is true');
}
else {
    console.log("Condition is false");
}