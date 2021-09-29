import firebase from './secret.js';
import { db } from './firestore.js';

const getPosts = () => db.collection('posts').get();

window.addEventListener('DOMContentLoaded', async (e) => {
  const querySnapshot = await getPosts();
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
});
