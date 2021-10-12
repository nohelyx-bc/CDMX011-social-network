/* eslint-disable import/no-cycle */
import { Home } from './components/home.js';
import { Register } from './components/register.js';
import { Dashboard } from './components/dashboard.js';

/* Reasign the name of the div in the html file who'll contain *
all the elements (with createElement and appenChild) */
const rootDiv = document.getElementById('root');

/* We asign to the routes the component which are home and register */
const routes = {
  '/': Home,
  '/register': Register,
  '/dashboard': Dashboard,
};

// Function to insert the node, html with appendChild
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

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};
// Again we declare a new variable who'll contain our routes
const component = routes[window.location.pathname];
/* We insert the routes to be shown in the DOM.
 Remember we call component() executing it, because it's a function */
rootDiv.appendChild(component());
