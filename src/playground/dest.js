console.log("dest.js");
/*
const person = {
  age: 26,
  name:'Aman',
  location: {
    city: 'New York',
    temp: 92
  }
};

const { name= 'NoName', age } = person;
console.log( `${name} is ${age}`);

const { city, temp: bro } = person.location;
console.log( `${city} is ${bro}`);

const book= {
  title: 'Eo is the Enemy',
  author: 'Ryna Holiday',
  publisher: {
    name: 'Penguin'
  }

};

const {name: publisherName= 'SelfPublished'} = book.publisher;
console.log(publisherName)

*/

//const address= ['1299 S Stret','Philly','PA','11432'];
const address= [];
const [street, city, state= 'Test', zip]= address;
console.log(`You are in ${city} ${state}`)

const item= ['Coffee (hot)','$2.00','$2.50','$2.75'];
const [coffee,,cost]=item;

console.log(`A medium ${coffee} ${cost}`)
