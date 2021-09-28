/* eslint-disable no-console */
import firebase from './secret.js';
import { onNavigate } from '../main.js';

// Email register
export async function emailRegister(email, password) {
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
}
// Login with Google
export async function logInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    const user = result.user;
    console.log('Bienvenid@', user.displayName);
    onNavigate('/dashboard');
  }).catch(() => {
    console.log('aquí debe ir un aviso de error');
  });
}

// console.log(firebase);

// Login with an email
export async function emailLogin(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Bienvenid@', user.displayName);
      onNavigate('/dashboard');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert('Correo o Contraseña no válida');
    });
}

// Logout code
export const logOut = () => {
  firebase.auth().signOut().then(() => {
    console.log('Se cerró sesión exitosamente');
    alert('Se cerró sesión exitosamente');
  }).catch((error) => {
    throw new Error(error);
  });
};
