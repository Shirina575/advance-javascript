const students = [
    {id: 21, name: 'abc'},
    {id: 31, name: 'def'},
    {id: 41, name: 'ghi'},
    {id: 51, name: 'jkl'}
];
// const output = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const names = element.name;
//     output.push(names);
// }
function name(){

}
const names = students.map(element => element.name);
const ids = students.map(element => element.id);
console.log(names, ids);
console.log(students.filter(s => s.id > 40));
console.log(students.find(s => s.id > 40));