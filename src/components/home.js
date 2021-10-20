/* eslint-disable import/no-cycle */
import { logInWithGoogle, emailLogin } from '../lib/auth.js';
import { onNavigate } from '../main.js';

// On the route home we insert the html elements which be shown in the DOM
export const Home = () => {
  const HomeDiv = document.createElement('div');
  const homeBox = document.createElement('div');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const divisor = document.createElement('hr');
  const buttonLoginGoogle = document.createElement('button');
  const linkRegister = document.createElement('a');
  const iconPassword = document.createElement('i');
  const showPassword = document.createElement('button');

  const logo = document.querySelector('.logo');
  logo.style.display = 'flex';

  // Assign classNames to the elements so we can manipulate it with css
  HomeDiv.className = 'home';
  homeBox.className = 'home_box';
  buttonLogin.className = 'login_style';
  inputUser.id = 'email';
  inputPassword.id = 'password';
  iconPassword.className = 'fas fa-eye-slash';
  showPassword.className = 'eyePassword';

  // Naming the elements
  inputUser.placeholder = 'Email';
  inputUser.autocomplete = 'on';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.type = 'password';
  buttonLogin.textContent = 'Ingresar';
  buttonLoginGoogle.innerHTML = ' <i class="fab fa-google"></i> Continuar con Google';
  linkRegister.textContent = '¿No tienes cuenta? Regístrate';
  linkRegister.href = '#';

  // Inserting the elements into the HomeDiv
  HomeDiv.appendChild(inputUser);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(showPassword);
  showPassword.appendChild(iconPassword);
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(divisor);
  HomeDiv.appendChild(buttonLoginGoogle);
  // Inserting the div "homeBox" into the "HomeDiv"
  HomeDiv.appendChild(homeBox);
  // Inserting the links into the homeBox div
  homeBox.appendChild(linkRegister);

  // Adding the events to the buttons and links

  // Show or hide password
  showPassword.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  });

  buttonLogin.addEventListener('click', async (e) => {
    try {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      await emailLogin(email, password);
    } catch (error) {
      throw Error(error);
    }
  });

  buttonLoginGoogle.addEventListener('click', (e) => {
    try {
      logInWithGoogle()
        .then((result) => {
          const user = result.user;
          onNavigate('/dashboard');
          console.log('Bienvenidx', user.displayName);
        }).catch(() => {
          console.log('aquí debe ir un aviso de error');
        });
    } catch (error) {
      throw Error(error);
    }
  });

  linkRegister.addEventListener('click', () => onNavigate('/register'));

  return HomeDiv;
};
