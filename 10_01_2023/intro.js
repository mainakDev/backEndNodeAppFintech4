const musicalInstruments = ['Guitar','Piano'];
const numbers = [1,2,3,4,5];

//FOR OF LOOP
for (const instrument of musicalInstruments) {
    // console.log('Instrument Name: '+instrument);
}

//ARRAY FUNCTIONS
/*
map(): iterates through the array, and does some function
push(): used to insert element at the end of the array
slice(): used to split the array or copy elements
*/
// const newArray = numbers.map(num => num+10)
// console.log(newArray.map(element => element));

musicalInstruments.push('Violin');
// console.log(musicalInstruments);
// for(let instrument of musicalInstruments){
//     console.log(instrument);
// }

//OBJECTS
const person1 = {
    userName: 'Jim Halpert',
    age: 45,
    password: '1234Abc'
};
const person2 = {
    userName: 'Michael Scott',
    age: 42,
    password: '64334Abc'
};

const newMusicalInstruments = [...musicalInstruments];
// console.log(newMusicalInstruments);
// const userName = person1.userName;
// const userAge= person1.age;

const {userName, password} = person1;

// console.log(userName,password);

//async
const fetchData = () => {
    setTimeout(() => {
        console.log('Done!');
    }, 1500);
};

setTimeout(() => { 
    fetchData();
    console.log('Timer is done');
}, 3000);

//sync
console.log('Hello');
console.log('Hi');