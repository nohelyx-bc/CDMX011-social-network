import { onNavigate } from '../main.js';

export const editModal = () => {
  const HomeDiv = document.createElement('div');
  const divModalContainer = document.createElement('div');
  const divModalContent = document.createElement('div');
  const buttonEdit = document.createElement('button');
  const spanModal = document.createElement('span');
  const textModal = document.createElement('p');

  divModalContainer.id = 'divModalContainer';
  divModalContainer.className = 'divModalContainer';
  buttonEdit.id = 'buttonEdit';
  divModalContent.className = 'divModalContent';
  spanModal.className = 'spanModal';
  spanModal.textContent = 'X';
  textModal.textContent = 'Probando el modal, yei';
  buttonEdit.textContent = 'Soy un modal (guiño guiño)';

  HomeDiv.appendChild(divModalContainer);
  divModalContainer.appendChild(divModalContent);
  divModalContent.appendChild(buttonEdit);
  divModalContent.appendChild(spanModal);
  divModalContent.appendChild(textModal);

  buttonEdit.addEventListener('click', (e) => {
    divModalContainer.style.display = 'block';

    body.style.position = 'static';
    body.style.height = '100%';
    body.style.overflow = 'hidden';

    span.onclick = function () {
      divModalContainer.style.display = 'none';

      body.style.position = 'inherit';
      body.style.height = 'auto';
      body.style.overflow = 'visible';
    };

    window.onclick = function (event) {
      if (event.target == divModalContainer) {
        divModalContainer.style.display = 'none';

        body.style.position = 'inherit';
        body.style.height = 'auto';
        body.style.overflow = 'visible';
      }
    };
  });

  buttonEdit.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/posts');
  });
  return HomeDiv;
};
