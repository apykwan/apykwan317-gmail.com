// const person = {
//     name: 'andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// let { name, age } = person;

// const { city, temp } = person.location;

// console.log({name});

// console.log({ city }, {temp });


const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

// const { name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName)

// const address = ['1299 s Juniper st', 'Philadelphia', 'Pennsylvania', '19147'];

// const [street, city, state, zip] = address;

// console.log(city, zip)

// const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

// const [coffee, ,medium] = item

// console.log(`${coffee} costs ${medium}`);

const myObj = {
    name: 'Andy',
    age: 28,
    habit: 'Javascript'
};



// getMyObj();
// const { habit } = myObj;

// const myFunc = (prop) => {
//     console.log(`my habit is ${prop}`);
// }

const myFunc = (update) => {
   myObj.habit = update.habit
   console.log(myObj.habit);
}

myFunc({ habit: 'whatever you said' });