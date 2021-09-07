
import { onNavigate } from '../main.js';

export const Register = () => {

  const HomeDiv = document.createElement('div');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const inputConfirmPassword = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const buttonRegisterGoogle = document.createElement('button');
  const linkLogin = document.createElement('a');

  HomeDiv.className = 'home';

  inputName.placeholder = 'Nombre';
  inputEmail.placeholder = 'Email';
  inputPassword.placeholder = 'Constraseña';
  inputConfirmPassword.placeholder = 'Confirma tu contraseña';
  buttonRegister.textContent = 'Registrar';
  buttonRegisterGoogle.textContent = 'Regístrate con Google';
  linkLogin.textContent = '¿Ya tienes cuenta? Ingresa';

  HomeDiv.appendChild(inputName);
  HomeDiv.appendChild(inputEmail);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(inputConfirmPassword);
  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonRegisterGoogle);
  HomeDiv.appendChild(linkLogin);


  buttonRegister.addEventListener('click', () => onNavigate('/'));
  buttonRegisterGoogle.addEventListener('click', () => onNavigate('/'));
  linkLogin.addEventListener('click', () => onNavigate('/'))

  return HomeDiv;
};