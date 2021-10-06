import firebase from './secret.js';

const auth = firebase.auth();
const user = () => firebase.auth().currentUser;
export const db = firebase.firestore();

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

export const showPosts = (data) => db.collection('posts').onSnapshot(data);

//export const deletePosts = (id) => db.collection('posts').doc(id).delete().then();

export const getPosts = () => db.collection('posts');
