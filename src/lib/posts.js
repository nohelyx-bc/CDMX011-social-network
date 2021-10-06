/* eslint-disable object-curly-newline */
import firebase from './secret.js';
import { db, showPosts, getPosts } from './firestore.js';

export const Posts = () => {
  const postDiv = document.createElement('div');
  const deletePost = document.createElement('a');
  const editPost = document.createElement('a');

  deletePost.textContent = 'Borrar';
  editPost.textContent = 'Editar';

  postDiv.className = 'postDiv';
  getPosts().onSnapshot((doc) => {
    const allPost = [];
    const getUser = () => firebase.auth().currentUser;
    console.log(getUser);
    doc.forEach((element) => allPost.push({ postId: element.id, infopost: element.data() }));
    console.log(allPost);
    allPost.map((post) => {
      const domDiv = document.createElement('div');
      domDiv.className = 'posts';

      if (getUser.email === post.infopost.uid) {
        domDiv.innerHTML = `<p> Publicado por: <br>${post.infopost.uid} </p>
        <p> ${post.infopost.text} </p> <br>
        <button> Borrar </borrar>`;
      } else {
        domDiv.innerHTML = `<p> Publicado por: <br>${post.infopost.uid} </p>
        <p> ${post.infopost.text} </p> <br>`;
      }


      domDiv.innerHTML = `<p> Publicado por: <br>${post.infopost.uid} </p>
      <p> ${post.infopost.text} </p> <br>`;

    });
  });
  return postDiv;
};