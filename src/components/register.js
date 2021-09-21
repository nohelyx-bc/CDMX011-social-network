/* eslint-disable import/no-cycle */
import { logInWithGoogle, emailRegister } from '../lib/firebase.js';
import { onNavigate } from '../main.js';

// On the route home we insert the html elements which be shown in the DOM
export const Register = () => {
  const HomeDiv = document.createElement('div');
  const homeBox = document.createElement('div');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const inputConfirmPassword = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const divisor = document.createElement('hr');
  const buttonRegisterGoogle = document.createElement('button');
  const buttonRegisterGithub = document.createElement('button');
  const linkLogin = document.createElement('a');
  const showPassword = document.createElement('button');
  const iconPassword = document.createElement('i');

  // Assign classNames and Id's to the elements so we can manipulate it with css
  HomeDiv.className = 'home';
  homeBox.className = 'home_box';
  buttonRegister.className = 'login_style';
  inputEmail.id = 'email';
  inputPassword.id = 'password';
  showPassword.className = 'eyePassword';
  iconPassword.className = 'fas fa-eye-slash';

  // Naming the elements
  inputName.placeholder = 'Nombre';
  inputEmail.placeholder = 'Email';
  inputPassword.placeholder = 'Contraseña';
  inputConfirmPassword.placeholder = 'Confirma tu contraseña';
  inputPassword.type = 'password';
  buttonRegister.textContent = 'Registrar';
  buttonRegisterGoogle.textContent = 'Regístrate con Google';
  buttonRegisterGithub.textContent = 'Regístrate con GitHub';
  linkLogin.textContent = '¿Ya tienes cuenta? Ingresa';
  linkLogin.href = '#';

  // Inserting the elements into the HomeDiv
  HomeDiv.appendChild(inputName);
  HomeDiv.appendChild(inputEmail);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(inputConfirmPassword);
  HomeDiv.appendChild(showPassword);
  showPassword.appendChild(iconPassword);
  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(divisor);
  HomeDiv.appendChild(buttonRegisterGoogle);
  HomeDiv.appendChild(buttonRegisterGithub);
  HomeDiv.appendChild(linkLogin);

  // Adding the events to the buttons and links

  // Show or hide password
  showPassword.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  });

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const userRegister = document.getElementById('email').value;
    const passwordRegister = document.getElementById('password').value;
    emailRegister(userRegister.trim(), passwordRegister.trim());
  });

  buttonRegisterGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    logInWithGoogle();
  });

  buttonRegisterGithub.addEventListener('click', () => onNavigate('/'));
  linkLogin.addEventListener('click', () => onNavigate('/'));

  return HomeDiv;
};
