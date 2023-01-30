const userName = 'Michael Scott';
const userAge = 45;
const hasHobbies = true;

//parameters of a function
//ES5: Ecma Script
function summarizeUser(userName, userAge, hasHobbies){
    return 'UserName is '+userName+' and age is '+userAge+' and he has hobbies: '+hasHobbies;
}

// console.log(summarizeUser(userName,userAge,hasHobbies));

//ES6

//Anonymous function
const summarizeUser1 = function(userName, userAge, hasHobbies){
    return 'UserName is '+userName+' and age is '+userAge+' and he has hobbies: '+hasHobbies;
}
// console.log(summarizeUser1(userName,userAge,hasHobbies));

//Arrow Functions
const summarizeUser2 = (userName, userAge, hasHobbies) => {
    return 'UserName is '+userName+' and age is '+userAge+' and he has hobbies: '+hasHobbies;
}

// console.log(summarizeUser2(userName,userAge,hasHobbies));

const variable = () => {}

const addTwoNumbers = (a,b) => {
    return a+b;
}
const addTwoNumbers2 = (a,b) => a+b;
// console.log(addTwoNumbers2(10,20));

function addTwoNumbers3(a,b){
    return a+b;
}

// setTimeout(() => {
//     console.log('Timer is done!');
// }, 2000);

// console.log('Hi');
// console.log('Hello');
// console.log('Hello again');

const hobbies = ['Cricket','football'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

const numbers = [1,2,3,4,5,6];
// for(let number of numbers){
//     console.log(number);
// }

// console.log(hobbies.map(hobby => 'hobby:'+hobby));
// console.log(numbers.map(num => num+1));

for(let dataElement of Data){
    hobbies.push(dataElement);
}
hobbies.push('Swimming');