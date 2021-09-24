/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const createPost = () => {
  const HomeDiv = document.createElement('div');
  const writeDiv = document.createElement('div');
  const backButton = document.createElement('button');
  const backIcon = document.createElement('i');
  const postTitle = document.createElement('h2');
  const firstDivisor = document.createElement('hr');
  const secondDivisor = document.createElement('hr');
  const submitPost = document.createElement('form');
  const writePost = document.createElement('input');
  const submitButton = document.createElement('button');

  backIcon.className = 'fas fa-long-arrow-alt-left';

  postTitle.textContent = '¿Qué nos cuentas hoy';
  writePost.placeholder = 'Escribe tu post aquí';
  submitButton.textContent = 'Publicar';

  HomeDiv.appendChild(backButton);
  backButton.appendChild(backIcon);
  HomeDiv.appendChild(writeDiv);
  writeDiv.appendChild(postTitle);
  writeDiv.appendChild(submitPost);
  submitPost.appendChild(firstDivisor);
  submitPost.appendChild(writePost);
  submitPost.appendChild(secondDivisor);
  submitPost.appendChild(submitButton);

  backButton.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/dashboard');
  });

  submitPost.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submiting');
    onNavigate('/dashboard');
  });

  return HomeDiv;
};
