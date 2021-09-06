export const Register = () => {
    const HomeDiv = document.createElement('div');
    const buttonRegister = document.createElement('button');

    buttonRegister.textContent = 'Registrar';

    HomeDiv.appendChild(buttonRegister);

    return HomeDiv;
};