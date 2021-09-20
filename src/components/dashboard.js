/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { logOut } from '../lib/firebase.js';

export const Dashboard = () => {
  const HomeDiv = document.createElement('div');
  const homeBox = document.createElement('div');
  const textAreaWall = document.createElement('textArea');
  const buttonSubmit = document.createElement('button');
  const buttonLogout = document.createElement('button');

  textAreaWall.placeholder = 'Puedes publicar aquí';
  buttonSubmit.textContent = 'Publicar';
  buttonLogout.textContent = 'Cerrar sesión';
  buttonLogout.className = 'buttonLogOut';
  buttonSubmit.className = 'buttonSubmit';
  HomeDiv.className = 'home';
  homeBox.className = 'home_box';

  HomeDiv.appendChild(homeBox);
  HomeDiv.appendChild(textAreaWall);
  HomeDiv.appendChild(buttonSubmit);
  HomeDiv.appendChild(buttonLogout);

  buttonLogout.addEventListener('click', () => {
    logOut();
    onNavigate('/');
  });

  buttonSubmit.addEventListener('click', () => {
    onNavigate('/dashboard');
  });

  return HomeDiv;
};
