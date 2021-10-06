/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { logOut } from '../lib/auth.js';
import { Posts } from '../lib/posts.js';

export const Dashboard = () => {
  const HomeDiv = document.createElement('div');
  const PostsDiv = document.createElement('section');
  const MenuDiv = document.createElement('div');
  const buttonPost = document.createElement('button');
  const buttonLogout = document.createElement('button');
  const iconPost = document.createElement('i');
  const iconLogout = document.createElement('i');
  const welcomeUser = document.createElement('p');
 
  buttonPost.className = 'wall-button';
  buttonLogout.className = 'wall-button';
  iconPost.className = 'fas fa-plus';
  iconLogout.className = 'fas fa-sign-out-alt';
  HomeDiv.className = 'home-wall';
  PostsDiv.className = 'home-posts';
  MenuDiv.className = 'home-menu';
  
  welcomeUser.className = 'welcomeUser';

  HomeDiv.appendChild(MenuDiv);
  HomeDiv.appendChild(PostsDiv);
  HomeDiv.appendChild(welcomeUser);
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

  getPosts().onSnapshot((doc) => {
    const allPost = [];
    doc.forEach((element) => allPost.push({ postId: element.id, infopost: element.data() }));
    console.log(allPost);
    allPost.map((post) => {
      const domDiv = document.createElement('div');
      deletePost.textContent = 'Borrar';
      editPost.textContent = 'Editar';
      domDiv.className = 'posts';

      domDiv.innerHTML = `<p> Publicado por: <br>${post.infopost.uid} </p>
      <p> ${post.infopost.text} </p> <br>`;

      welcomeUser.appendChild(domDiv);

  return HomeDiv;
};
