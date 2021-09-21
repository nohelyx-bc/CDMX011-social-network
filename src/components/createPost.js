/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const createPost = () => {
  const HomeDiv = document.createElement('div');
  const writeDiv = document.createElement('div');
  const backButton = document.createElement('button');
  const backIcon = document.createElement('i');
  const postTitle = document.createElement('h2');
  const divisor = document.createElement('hr');
  const writePost = document.createElement('input');
  const submitButton = document.createElement('button');

  backIcon.className = 'fas fa-long-arrow-alt-left';
  postTitle.textContent = '¿Qué nos cuentas hoy';
  writePost.placeholder = 'Escribe tu post aquí';

  HomeDiv.appendChild(writeDiv);
  HomeDiv.appendChild(backButton);
  backButton.appendChild(backIcon);
  writeDiv.appendChild(postTitle);
  writeDiv.appendChild(divisor);
  writeDiv.appendChild(writePost);
  writePost.appendChild(divisor);
  writePost.appendChild(submitButton);

  backButton.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/dashboard');
  });

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/dashboard');
  });

  return HomeDiv;
};
