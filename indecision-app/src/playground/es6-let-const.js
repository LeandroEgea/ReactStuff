var nameVar = 'Andrew';
var nameVar = 'Bruh';
console.log('nameVar', nameVar);

let nameLet = 'Bob';//no redefine
nameLet = 'Charles';
console.log('nameLet', nameLet);

const nameConst = 'Mark';//no variable
console.log('nameConst', nameConst);

const fullName = 'Bob Jhonson';
let lastName;

if(fullName){
    lastName = fullName.split(' ')[1];
}
console.log(lastName);