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

export const showPosts = (data) => db.collection('posts').onSnapshot(data);

export const deletePosts = (id) => db.collection('posts').doc(id).delete().then(() => {
  console.log('Tu post ha sido eliminado');
});

export const editPosts = () => db.collection('posts').doc().update();

export const getPosts = () => db.collection('posts');
