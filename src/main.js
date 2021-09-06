import { Home } from "./components/home.js"
import { Register } from "./components/register.js"
import { Login } from "./components/login.js"

const rootDiv = document.getElementById('root');

const routes = {
    '/': Home, 
    '/register': Register,
    '/login': Login
}

//Variable para insertar el nodo, html con appendChild
export const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
    );
  
    while (rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
  
    rootDiv.appendChild(routes[pathname]());
  };
  
  const component = routes[window.location.pathname];
  
  window.onpopstate = () => {
    while (rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname]());
  };
  
  rootDiv.appendChild(component());