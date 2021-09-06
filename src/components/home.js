export const Home = () => {
    const HomeDiv = document.createElement('div');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    buttonRegister.textContent = 'Regístrate';
    buttonLogin.textContent = 'Inicia sesión';

    HomeDiv.appendChild(buttonRegister);
    HomeDiv.appendChild(buttonLogin);

    return HomeDiv;
}
