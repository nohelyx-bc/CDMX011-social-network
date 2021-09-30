import firebase from './secret.js';
import { db } from './firestore.js';

const getPosts = () => db.collection('posts').get();
const HomeDiv = document.createElement('div');
const postShown = document.createElement('div');
postShown.id = 'postShown';
HomeDiv.appendChild(postShown);

export function postDom() {
  window.addEventListener('DOMContentLoaded', async (e) => {
    const querySnapshot = await getPosts();
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log('Aquí va el post en el DOM');
      // const postDOM = doc.data();
      postShown.innerHTML += `<title>${doc.data().text} ddd</title`;
    });
    return HomeDiv;
  });
}
