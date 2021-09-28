import firebase from './secret.js';

const db = firebase.firestore();

export async function insert(item) {
  try {
    const response = await db.collection('posts').add(item);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
// Add a second document with a generated ID.
db.collection('users').add({
  first: 'Alan',
  middle: 'Mathison',
  last: 'Turing',
  born: 1912,
})
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });
db.collection('users').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
