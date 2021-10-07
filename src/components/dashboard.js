/* eslint-disable import/no-cycle */
import firebase from '../lib/secret.js';
import { onNavigate } from '../main.js';
import { logOut, user } from '../lib/auth.js';
import { Posts } from '../lib/posts.js';

export const Dashboard = () => {
  const HomeDiv = document.createElement('div');
  const PostsDiv = document.createElement('section');
  const MenuDiv = document.createElement('div');
  const buttonPost = document.createElement('button');
  const buttonLogout = document.createElement('button');
  const iconPost = document.createElement('i');
  const iconLogout = document.createElement('i');

  const header = document.querySelector('header');
  header.style.display = 'none';

  buttonPost.className = 'wall-button';
  buttonLogout.className = 'wall-button';
  iconPost.className = 'fas fa-plus';
  iconLogout.className = 'fas fa-sign-out-alt';
  HomeDiv.className = 'home-wall';
  PostsDiv.className = 'home-posts';
  MenuDiv.className = 'home-menu';

  HomeDiv.appendChild(MenuDiv);
  HomeDiv.appendChild(PostsDiv);
  MenuDiv.appendChild(buttonPost);
  MenuDiv.appendChild(buttonLogout);
  buttonPost.appendChild(iconPost);
  buttonLogout.appendChild(iconLogout);
  PostsDiv.appendChild(Posts());

  buttonLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
    onNavigate('/');
  });

  buttonPost.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/posts');
  });

  return HomeDiv;
};
