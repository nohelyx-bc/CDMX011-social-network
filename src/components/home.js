/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');
  const buttonLoginGithub = document.createElement('button');
  

  buttonLogin.textContent = 'Ingresar';
  buttonLoginGoogle.textContent = 'Ingresa a través de Google';
  buttonLoginGithub.textContent = 'Ingresa a través de GitHub';

  
  HomeDiv.appendChild(inputUser);
  HomeDiv.appendChild(inputPassword)
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonLoginGithub);
  HomeDiv.appendChild(buttonLoginGoogle);


  buttonLogin.addEventListener('click', () => onNavigate('/'));
  buttonLoginGoogle.addEventListener('click', () => onNavigate('/'))
  buttonLoginGithub.addEventListener('click', () => onNavigate('/'))

  
  return HomeDiv;
};
