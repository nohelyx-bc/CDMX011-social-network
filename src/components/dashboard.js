/* eslint-disable import/no-cycle */
import firebase from '../lib/secret.js';
import { onNavigate } from '../main.js';
import { logOut, user } from '../lib/auth.js';
import { Posts } from '../lib/posts.js';
import { savePosts } from '../lib/firestore.js';

export const Dashboard = () => {
  const HomeDiv = document.createElement('div');
  const PostsDiv = document.createElement('section');
  const MenuDiv = document.createElement('div');
  const buttonLogout = document.createElement('button');
  const iconPost = document.createElement('i');
  const iconLogout = document.createElement('i');
  const writeDiv = document.createElement('div');
  const postTitle = document.createElement('h2');
  const submitPost = document.createElement('form');
  const writePost = document.createElement('textArea');
  const submitButton = document.createElement('button');
  const textLogOut = document.createElement('p');
  const buttonEdit = document.createElement('button');

  const logo = document.querySelector('.logo');
  logo.style.display = 'none';

  writePost.id = 'writePost';
  buttonEdit.id = 'buttonEdit';
  textLogOut.textContent = 'Salir';

  buttonLogout.className = 'wall-button';
  textLogOut.className = 'textLogout';
  iconPost.className = 'fas fa-plus';
  iconLogout.className = 'fas fa-sign-out-alt';
  HomeDiv.className = 'home-wall';
  PostsDiv.className = 'home-posts';
  MenuDiv.className = 'home-menu';
  submitPost.id = 'submitPost';
  writePost.id = 'writePost';
  writePost.className = 'writePost';
  postTitle.textContent = '¿Qué nos cuentas hoy?';
  writePost.placeholder = 'Escribe tu post aquí';
  submitButton.textContent = 'Publicar';
  submitButton.id = 'submitButton';
  submitButton.className = 'submitButton';
  writeDiv.className = 'writeDiv';

  HomeDiv.appendChild(MenuDiv);
  MenuDiv.appendChild(buttonLogout);
  buttonLogout.appendChild(iconLogout);
  buttonLogout.appendChild(textLogOut);
  HomeDiv.appendChild(writeDiv);
  HomeDiv.appendChild(PostsDiv);
  writeDiv.appendChild(postTitle);
  writeDiv.appendChild(submitPost);
  submitPost.appendChild(writePost);
  submitPost.appendChild(submitButton);
  PostsDiv.appendChild(Posts());

  //cuadro modal
  const modal = document.createElement('div');
  modal.className = 'modal';
  HomeDiv.appendChild(modal);

  buttonLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
    onNavigate('/');
    logo.style.display = 'block';
  });

  submitPost.addEventListener('submit', async (e) => {
    e.preventDefault();

    const postForm = document.getElementById('submitPost');
    const newPost = postForm.writePost.value;

    await savePosts(newPost);

    onNavigate('/dashboard');
  });
  return HomeDiv;
};
