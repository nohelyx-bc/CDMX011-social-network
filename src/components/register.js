
/* eslint-disable no-undef */
// eslint-disable-next-line import/no-cycle

import { onNavigate } from '../main.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  
  buttonRegister.textContent = 'Registrar';

  buttonRegister.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonRegister);

  return HomeDiv;
};