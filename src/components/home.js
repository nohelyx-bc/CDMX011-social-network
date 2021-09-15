/* eslint-disable import/no-cycle */
import { logInWithGoogle, emailLogin } from '../lib/firebase.js';
import { onNavigate } from '../main.js';

// On the route home we insert the html elements which be shown in the DOM
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

  // Assign classNames to the elements so we can manipulate it with css
  HomeDiv.className = 'home';
  homeBox.className = 'home_box';
  buttonLogin.className = 'login_style';
  inputUser.id = 'email';
  inputPassword.id = 'password';

  // Naming the elements
  inputUser.placeholder = 'Nombre';
  inputPassword.placeholder = 'Contraseña';
  buttonLogin.textContent = 'Ingresar';
  buttonLoginGoogle.textContent = 'Ingresa a través de Google';
  buttonLoginGithub.textContent = 'Ingresa a través de GitHub';
  linkPassword.textContent = '¿Olvidaste tu contraseña?';
  linkPassword.href = '#';
  linkRegister.textContent = '¿No tienes cuenta? Regístrate';
  linkRegister.href = '#';

  // Inserting the elements into the HomeDiv
  HomeDiv.appendChild(inputUser);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonLoginGithub);
  HomeDiv.appendChild(buttonLoginGoogle);
  HomeDiv.appendChild(homeBox); // Inserting the div "homeBox" into the "HomeDiv"
  // Inserting the links into the homeBox div
  homeBox.appendChild(linkPassword);
  homeBox.appendChild(linkRegister);

  // Adding the events to the buttons and links
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    emailLogin(email, password);
  });

  buttonLoginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    logInWithGoogle();
  });

  buttonLoginGithub.addEventListener('click', () => onNavigate('/'));
  linkPassword.addEventListener('click', () => onNavigate('/'));
  linkRegister.addEventListener('click', () => onNavigate('/register'));

  return HomeDiv;
};
