import { onNavigate } from '../main.js';
import { logOut } from '../lib/firebase.js';

export const Dashboard = () => {
  const HomeDiv = document.createElement('div');
  const buttonLogout = document.createElement('button');

  buttonLogout.textContent = 'Cerrar sesión';

  HomeDiv.appendChild(buttonLogout);

  buttonLogout.addEventListener('click', () => {
      logOut();
      onNavigate('/');
  });

  return HomeDiv;
};