/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const homeBox = document.createElement('div');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');
  const buttonLoginGithub = document.createElement('button');
  const linkPassword = document.createElement('a');
  const linkRegister = document.createElement('a');

  HomeDiv.className = 'home';
  homeBox.className = 'home_box';
  buttonLogin.className = 'login_style';

  inputUser.placeholder = 'Nombre';
  inputPassword.placeholder = 'Contraseña';
  buttonLogin.textContent = 'Ingresar';
  buttonLoginGoogle.textContent = 'Ingresa a través de Google';
  buttonLoginGithub.textContent = 'Ingresa a través de GitHub';
  linkPassword.textContent = '¿Olvidaste tu contraseña?';
  linkPassword.href = '#';
  linkRegister.textContent = '¿No tienes cuenta? Regístrate';
  linkRegister.href = '#';


  HomeDiv.appendChild(inputUser);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonLoginGithub);
  HomeDiv.appendChild(buttonLoginGoogle);
  HomeDiv.appendChild(homeBox);
  homeBox.appendChild(linkPassword);
  homeBox.appendChild(linkRegister);


  buttonLogin.addEventListener('click', () => onNavigate('/'));
  buttonLoginGoogle.addEventListener('click', () => onNavigate('/'));
  buttonLoginGithub.addEventListener('click', () => onNavigate('/'));
  linkPassword.addEventListener('click', () => onNavigate('/'));
  linkRegister.addEventListener('click', () => onNavigate('/register'));


  return HomeDiv;
};
