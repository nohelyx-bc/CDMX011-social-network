/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { logOut } from '../lib/firebase.js';

export const Dashboard = () => {
  const HomeDiv = document.createElement('div');
  const PostsDiv = document.createElement('div');
  const MenuDiv = document.createElement('div');
  const buttonHome = document.createElement('button');
  const buttonPost = document.createElement('button');
  const buttonLogout = document.createElement('button');
  const iconHome = document.createElement('i');
  const iconPost = document.createElement('i');
  const iconLogout = document.createElement('i');

  // const logo = document.querySelector('.logo');

  buttonHome.className = 'wall-button';
  buttonPost.className = 'wall-button';
  buttonLogout.className = 'wall-button';
  iconHome.className = 'fas fa-home';
  iconPost.className = 'fas fa-plus';
  iconLogout.className = 'fas fa-sign-out-alt';
  HomeDiv.className = 'home-wall';
  PostsDiv.className = 'home-posts';
  MenuDiv.className = 'home-menu';

  HomeDiv.appendChild(PostsDiv);
  HomeDiv.appendChild(MenuDiv);
  MenuDiv.appendChild(buttonHome);
  MenuDiv.appendChild(buttonPost);
  MenuDiv.appendChild(buttonLogout);
  buttonHome.appendChild(iconHome);
  buttonPost.appendChild(iconPost);
  buttonLogout.appendChild(iconLogout);
  // logo.remove();

  buttonLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
    onNavigate('/');
  });

  buttonHome.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/dashboard');
  });

  buttonPost.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/post');
  });

  return HomeDiv;
};
