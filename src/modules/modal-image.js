const cssModal =  `
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
    justify-content: center;
    align-items: center;
  }

  .modal__content {
    max-width: 90%;
    max-height: 90%;
    margin: auto;
  }

  .modal__close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
  }
`;

const addModalToTheDom = () => {

  if(!document.querySelector("#modal")) {
    const modal = document.createElement('div');
    modal.id = "modal";
    modal.classList.add('modal');
    
    modal.innerHTML = `
      <span id="close" class="modal__close">&times;</span>
      <img id="modal-image" class="modal__content" />
    `;
    
    document.body.appendChild(modal);

    const style = document.createElement('style');
    style.textContent = cssModal;
    document.head.appendChild(style); // Ajoute le style au head
  }
}

export function openModal(imageSrc) {
    addModalToTheDom();
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
  
    modal.style.display = "flex"; // Affiche la modale
    modalImage.src = imageSrc; // Définit la source de l'image
  
    // close the modal
    const closeButton = document.getElementById("close");
    closeButton.onclick = () => {
      modal.style.display = "none"; // Masque la modale
    };
  
    // close modal when click outside it
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
}
  
