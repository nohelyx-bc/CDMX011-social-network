export const Login = () => {
    const HomeDiv = document.createElement('div');
    const buttonHome = document.createElement('button');
  
    buttonHome.textContent = 'Ingresar';
  
    HomeDiv.appendChild(buttonHome);
  
    return HomeDiv;
};