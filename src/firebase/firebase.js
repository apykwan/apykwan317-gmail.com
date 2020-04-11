import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: process.env.FIREASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:568838638708:web:5abdf8324e31f60b2c9521",
    measurementId: "G-22WNF65ERZ"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

/* subscribe */
// database.ref().on('value', snapshot => {
//     console.log(snapshot.val());
// });

// /*child_removed*/ 
// database.ref('expenses').on('child_removed', snapshot => {
//     console.log("child removed", snapshot.key, snapshot.val());
// });

// /*child_changed */
// database.ref('expenses').on('child_changed', snapshot => {
//     console.log("child changed", snapshot.key, snapshot.val());
// });

// /*child_added */
// database.ref('expenses').on('child_added', snapshot => {
//     console.log("child added", snapshot.key, snapshot.val());
// });

/* ref().push() ****Adding an Object */
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// })

// database.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];

//         snapshot.forEach((childSnap) => {
//             expenses.push({
//                 id: childSnap.key,
//                 ...childSnap.val()
//             });
//         });
//         console.log(expenses);
//     });
// database.ref('expenses')
//     .on('value', snapshot => {
//         const expenses = [];
//         snapshot.forEach(childSnap => {
//             expenses.push({
//                 id: childSnap.key,
//                 ...childSnap.val()
//             })
//         });
//         console.log(expenses);
//     }, err => {
//         console.log('Error: ', err);
//     });

// database.ref('expenses').push({
//     description: 'Gym Bill',
//     note: '',
//     amount: '10000',
//     createdAt: 3232230
// });


// database.ref('expenses/-M4ZYVSs1UaCN0ggavXr').update({
//     amount: 0
// });

// database.ref('notes/-M4Y8RsT5YmJA9wB9y7j').remove();

// database.ref().on('value', data => {
//     const snap = data.val();
//     console.log(`${snap.name} is ${snap.job.title} at ${snap.job.company}`);
// }, e => {
//     console.error("Fetching Failed!!!", e)
// });

// setTimeout(_ => {
//     database.ref().update({
//         name: "andrew",
//         "job/company": "Google",
//         "job/title": "Janitor"
//     });
// },3000);

// database.ref().update({
//     name: "andrew",
//     "job/company": "Amazon",
//     "job/title": "Software Developer"
// });



// const onValueChange = database.ref().on('value', snapshot => {
//     console.log(snapshot.val());
// }, e => {
//     console.log('Error with data fetching', e)
// });

// // database.ref().on('value', onValueChange);

// setTimeout(() => {
//     database.ref('age').set(82)
// }, 3000);

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(28)
// }, 10500);

// database.ref()
//     .once('value')
//     .then(snapshot => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(e => {
//         console.log('Error fectching data', e)
//     });

// database.ref().set({
//     name: 'Andrew Meat',
//     age: 99,
//     job: {
//         title: 'assassin',
//         company: 'the tainted'
//     },
//     stressLevel: 6,
//     location: {
//         state: 'California',
//         city: 'Los Angeles'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch(err => {
//     console.log('This failed.', err)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'job/boss': 'Bezo',
//     'location/city': 'Seattle',
//     enemy: 'Templar'
// })

// database.ref().set('This is my data.');

// database.ref('attributes').set({
//     height: 180,
//     weight: 80
// }).then(_ => {
//     console.log('data loading');
// }).catch(err => {
//     console.error('New Error:', err)
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed')
//     }).catch(e => {
//         console.log('Did not remove data', e)
//     })

// database.ref('location').set(null);