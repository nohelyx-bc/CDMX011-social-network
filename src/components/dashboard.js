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
  const buttonModalPost = document.createElement('button');
  const iconPost = document.createElement('i');
  const iconLogout = document.createElement('i');
  const writeDiv = document.createElement('div');
  const postTitle = document.createElement('h2');
  const firstDivisor = document.createElement('hr');
  const secondDivisor = document.createElement('hr');
  const submitPost = document.createElement('form');
  const writePost = document.createElement('textArea');
  const submitButton = document.createElement('button');

  const header = document.querySelector('header');
  header.style.display = 'none';

  buttonLogout.className = 'wall-button';
  iconPost.className = 'fas fa-plus';
  iconLogout.className = 'fas fa-sign-out-alt';
  HomeDiv.className = 'home-wall';
  PostsDiv.className = 'home-posts';
  MenuDiv.className = 'home-menu';
  buttonModalPost.textContent = 'Edit';
  submitPost.id = 'submitPost';
  writePost.id = 'writePost';
  writePost.className = 'writePost';
  postTitle.textContent = '¿Qué nos cuentas hoy?';
  writePost.placeholder = 'Escribe tu post aquí';
  submitButton.textContent = 'Publicar';

  HomeDiv.appendChild(writeDiv);
  HomeDiv.appendChild(MenuDiv);
  HomeDiv.appendChild(PostsDiv);
  MenuDiv.appendChild(buttonLogout);
  MenuDiv.appendChild(buttonModalPost);
  writeDiv.appendChild(postTitle);
  writeDiv.appendChild(submitPost);
  submitPost.appendChild(firstDivisor);
  submitPost.appendChild(writePost);
  submitPost.appendChild(secondDivisor);
  submitPost.appendChild(submitButton);
  buttonLogout.appendChild(iconLogout);
  PostsDiv.appendChild(Posts());

  buttonLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
    onNavigate('/');
  });

  buttonModalPost.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/modalPost');
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
