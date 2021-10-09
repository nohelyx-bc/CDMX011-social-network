/* eslint-disable object-curly-newline */
import { db, showPosts, getPosts, deletePosts, editPosts } from './firestore.js';
import { user } from './auth.js';

export const Posts = () => {
  const postDiv = document.createElement('div');

  postDiv.className = 'postDiv';
  getPosts().onSnapshot((doc) => {
    const allPost = [];
    const currentUser = user();
    console.log(currentUser.email);

    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcomeDiv';
    welcomeDiv.innerHTML = `<h3> Bienvenidx ${currentUser.email}</h3>`;
    postDiv.appendChild(welcomeDiv);

    doc.forEach((element) => allPost.push({ postId: element.id, infopost: element.data() }));
    console.log(allPost);
    allPost.map((post) => {
      console.log(post.postId);
      const domDiv = document.createElement('div');
      domDiv.className = 'posts';
      if (currentUser.email == post.infopost.uid) {
        domDiv.innerHTML = `<p> Publicado por: <br>${post.infopost.uid} </p>
        <p> ${post.infopost.text} </p> <br>
        <button class= 'deletePostButton' data-id ='${post.postId}'> Borrar </button>
        <button class= 'editPostButton' data-id ='${post.postId}'> Editar </button>`;
      } else {
        domDiv.innerHTML = `<p> Publicado por: <br>${post.infopost.uid} </p>
        <p> ${post.infopost.text} </p> <br>`;
      }
      return postDiv.appendChild(domDiv);
    });

    const deletePostButton = document.querySelectorAll('.deletePostButton');
    deletePostButton.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const confirmPostDelete = window.confirm('¿Estás segurx que quieres eliminar tu post?');
        if (confirmPostDelete === true) {
          console.log(e.target.dataset.id);
          await deletePosts(e.target.dataset.id);
        }
      });
    });

    const editPostsButton = document.querySelectorAll('.editPostButton');
    editPostsButton.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        console.log(e.target.dataset.id);
      });
    });
  });
  return postDiv;
};
