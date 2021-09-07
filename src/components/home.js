/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');
  const buttonLoginGithub = document.createElement('button');
  const linkPassword = document.createElement('a');
  const linkRegister = document.createElement('a');

  HomeDiv.className = 'home';
  inputUser.placeholder = 'Nombre';
  inputPassword.placeholder = 'Contraseña';
  buttonLogin.textContent = 'Ingresar';
  buttonLoginGoogle.textContent = 'Ingresa a través de Google';
  buttonLoginGithub.textContent = 'Ingresa a través de GitHub';
  linkPassword.textContent = '¿Olvidaste tu contraseña?';
  linkRegister.textContent = '¿No tienes cuenta? Regístrate'


  HomeDiv.appendChild(inputUser);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonLoginGithub);
  HomeDiv.appendChild(buttonLoginGoogle);
  HomeDiv.appendChild(linkPassword);
  HomeDiv.appendChild(linkRegister);


  buttonLogin.addEventListener('click', () => onNavigate('/'));
  buttonLoginGoogle.addEventListener('click', () => onNavigate('/'));
  buttonLoginGithub.addEventListener('click', () => onNavigate('/'));
  linkPassword.addEventListener('click', () => onNavigate('/'));
  linkRegister.addEventListener('click', () => onNavigate('/register'));


  return HomeDiv;
};
