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
  const writePost = document.createElement('input');
  const submitButton = document.createElement('button');

  //const logo = document.querySelector('.logo');

  backIcon.className = 'fas fa-long-arrow-alt-left';

  postTitle.textContent = '¿Qué nos cuentas hoy';
  writePost.placeholder = 'Escribe tu post aquí';
  submitButton.textContent = 'Publicar';

  HomeDiv.appendChild(backButton);
  backButton.appendChild(backIcon);
  HomeDiv.appendChild(writeDiv);
  writeDiv.appendChild(postTitle);
  writeDiv.appendChild(firstDivisor);
  writeDiv.appendChild(writePost);
  writeDiv.appendChild(secondDivisor);
  writeDiv.appendChild(submitButton);
  //logo.remove();

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
