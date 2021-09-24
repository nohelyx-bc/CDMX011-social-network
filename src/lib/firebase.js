/* eslint-disable no-console */
import firebase from './secret.js';
import { onNavigate } from '../main.js';

// Login with Google
export const logInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;
    onNavigate('/dashboard');
    console.log(user);
  }).catch(() => {
    console.log('aquí debe ir un aviso de error');
  });
};

// Email register
export const emailRegister = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      onNavigate('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

// console.log(firebase);

// Login with an email
export const emailLogin = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      onNavigate('/dashboard');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert('Correo o Contraseña no válida');
    });
};

// Logout code
export const logOut = () => {
  firebase.auth().signOut().then(() => {
    console.log('Se cerró sesión exitosamente');
    alert('Se cerró sesión exitosamente');
  }).catch((error) => {

  });
};
