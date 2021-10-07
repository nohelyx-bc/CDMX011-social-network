/* eslint-disable object-curly-newline */
import firebase from './secret.js';
import { db, showPosts, getPosts } from './firestore.js';
import { user } from './auth.js';

export const Posts = () => {
  const postDiv = document.createElement('div');

  postDiv.className = 'postDiv';
  getPosts().onSnapshot((doc) => {
    const allPost = [];
    const currentUser = user();
    console.log(currentUser.email);
    console.log(currentUser.displayName);

    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerHTML = `<h2> Bienvenidx ${currentUser.email}</h2>`;
    postDiv.appendChild(welcomeDiv);
    console.log(user);
    doc.forEach((element) => allPost.push({ postId: element.id, infopost: element.data() }));
    console.log(allPost);
    allPost.map((post) => {
      const domDiv = document.createElement('div');
      domDiv.className = 'posts';
      if (currentUser.email == post.infopost.uid) {
        domDiv.innerHTML = `<p> Publicado por: <br>${post.infopost.uid} </p>
        <p> ${post.infopost.text} </p> <br>
        <button class= 'deletePostButton'> Borrar </button>
        <button class= 'editPostButton'> Editar </button>`;
      } else {
        domDiv.innerHTML = `<p> Publicado por: <br>${post.infopost.uid} </p>
        <p> ${post.infopost.text} </p> <br>`;
      }
      postDiv.appendChild(domDiv);
    });
  });
  return postDiv;
};
