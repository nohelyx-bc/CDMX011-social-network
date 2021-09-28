import firebase from './secret.js';

const auth = firebase.auth();
const user = () => firebase.auth().currentUser;
const db = firebase.firestore();


export const savePosts = (text) => {
  const callUser = user();
  db.collection('posts').doc().set({
    text,
    uid: [
      callUser.email,
    ],
    likes: [],
  });
};

