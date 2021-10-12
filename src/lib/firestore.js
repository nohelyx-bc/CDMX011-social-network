import firebase from './secret.js';

const auth = firebase.auth();
export const user = () => firebase.auth().currentUser;
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

export const deletePosts = (id) => db.collection('posts').doc(id).delete();
export const showPosts = (data) => db.collection('posts').onSnapshot(data);

export const editPosts = (id, updatedData) => db.collection('posts').doc(id).update(updatedData);
export const getPosts = () => db.collection('posts');
