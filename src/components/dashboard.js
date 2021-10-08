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
  const submitPost = document.createElement('form');
  const writePost = document.createElement('textArea');
  const submitButton = document.createElement('button');
  const header = document.querySelector('header');
  header.style.display = 'none';

  
  const divModalContainer = document.createElement('div');
  const divModalContent = document.createElement('div');
  const buttonEdit = document.createElement('button');
  const spanModal = document.createElement('span');
  const textModal = document.createElement('p');
  const bodyEdit = document.createElement('body');

  divModalContainer.id = 'divModalContainer';
  divModalContainer.className = 'divModalContainer';
  buttonEdit.id = 'buttonEdit';
  divModalContent.className = 'divModalContent';
  spanModal.className = 'spanModal';
  spanModal.textContent = 'X';
  textModal.textContent = 'Probando el modal, yei';
  buttonEdit.textContent = 'Soy un modal (guiño guiño)';
  bodyEdit.querySelector = 'body';

  HomeDiv.appendChild(divModalContainer);
  divModalContainer.appendChild(divModalContent);
  divModalContent.appendChild(buttonEdit);
  divModalContent.appendChild(spanModal);
  divModalContent.appendChild(textModal);

  buttonEdit.addEventListener('click', (e) => {
    e.preventDefault();
    divModalContainer.style.display = 'block';
    onNavigate('/dashboard');
    
    bodyEdit.style.position = 'static';
    bodyEdit.style.height = '100%';
    bodyEdit.style.overflow = 'hidden';

    spanModal.onclick = () => {
      divModalContainer.style.display = 'none';

      bodyEdit.style.position = 'inherit';
      bodyEdit.style.height = 'auto';
      bodyEdit.style.overflow = 'visible';
    };

    window.onclick = (event) => {
      if (event.target == divModalContainer) {
        divModalContainer.style.display = 'none';

        bodyEdit.style.position = 'inherit';
        bodyEdit.style.height = 'auto';
        bodyEdit.style.overflow = 'visible';
      }
    };
  });

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
  submitPost.appendChild(writePost);
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
