import { onNavigate } from '../main.js';

export const editModal = () => {
  const HomeDiv = document.createElement('div');
  const divModalContainer = document.createElement('div');
  const divModalContent = document.createElement('div');
  const buttonEdit = document.createElement('button');
  const spanModal = document.createElement('span');
  const textModal = document.createElement('p');
  const bodyEdit = document.createElement('body');

  divModalContainer.id = 'divModalContainer';
  divModalContainer.className = 'divModalContainer';
  buttonEdit.id = 'buttonEdit';
  divModalContent.className = 'divModalContent';
  spanModal.className = 'spanModal';
  spanModal.textContent = 'X';
  textModal.textContent = 'Probando el modal, yei';
  buttonEdit.textContent = 'Soy un modal (guiño guiño)';
  bodyEdit.tagName = 'body';

  HomeDiv.appendChild(divModalContainer);
  divModalContainer.appendChild(divModalContent);
  divModalContent.appendChild(buttonEdit);
  divModalContent.appendChild(spanModal);
  divModalContent.appendChild(textModal);

  buttonEdit.addEventListener('click', (e) => {
    e.preventDefault();
    divModalContainer.style.display = 'block';
    onNavigate('/dashboard');
    
    bodyEdit.style.position = 'static';
    bodyEdit.style.height = '100%';
    bodyEdit.style.overflow = 'hidden';

    spanModal.onclick = () => {
      divModalContainer.style.display = 'none';

      bodyEdit.style.position = 'inherit';
      bodyEdit.style.height = 'auto';
      bodyEdit.style.overflow = 'visible';
    };

    window.onclick = (event) => {
      if (event.target == divModalContainer) {
        divModalContainer.style.display = 'none';

        bodyEdit.style.position = 'inherit';
        bodyEdit.style.height = 'auto';
        bodyEdit.style.overflow = 'visible';
      }
    };
  });

  return HomeDiv;
};
