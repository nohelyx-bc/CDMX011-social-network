/* eslint-disable object-curly-newline */
import { db, showPosts, getPosts, deletePosts, editPosts } from './firestore.js';
import { user } from './auth.js';

export const Posts = () => {
  const HomeDiv = document.createElement('div');
  const postDiv = document.createElement('div');
  const welcomeDiv = document.createElement('div');
  HomeDiv.appendChild(welcomeDiv);
  HomeDiv.appendChild(postDiv);
  postDiv.className = 'postDiv';
  getPosts().onSnapshot((doc) => {
    const allPost = [];
    const currentUser = user();
    console.log(currentUser.email);

    welcomeDiv.className = 'welcomeDiv';
    welcomeDiv.innerHTML = `<h3> Bienvenidx: ${currentUser.email}</h3>`;

    doc.forEach((element) => allPost.push({ postId: element.id, infopost: element.data() }));
    console.log(allPost);
    allPost.map((post) => {
      const domDiv = document.createElement('div');
      domDiv.className = 'posts';
      if (currentUser.email == post.infopost.uid) {
        domDiv.innerHTML = `<p> Publicado por: <br>${post.infopost.uid} </p>
        <p> ${post.infopost.text} </p> <br>
        <button class= 'deletePostButton' data-id ='${post.postId}'> Borrar </button>
        <button class= 'editPostButton' data-id ='${post.postId}','${post.infopost.text}'> Editar </button>`;
      } else {
        domDiv.innerHTML = `<p> Publicado por: <br>${post.infopost.uid} </p>
        <p> ${post.infopost.text} </p> <br>`;
      }
      return postDiv.appendChild(domDiv);
    });
    // Function to delete posts
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
    // Function to edit posts
    const editPostButton = document.querySelectorAll('.editPostButton');
    editPostButton.forEach((btn) => {
      const updatePost = document.getElementById('writePost').value;
      const updatedData = {
        text: updatePost,
      };
      const submitButton = document.getElementById('submitPost');
      btn.addEventListener('click', async (e) => {
        await editPosts(e.target.dataset.id, updatedData)
          .then(() => {
            console.log('Document successfully updated!');
            submitButton.textContent = 'Guardar';
          })
          .catch(() => {
            console.log('Ha habido un error');
          });
      });
    });
  });
  return HomeDiv;
};
