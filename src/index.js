import { displayFeeds } from "./modules/feed.js"
import { addCommentForm } from "./modules/comment.js"

async function fetchFeeds(callback) {
    try {
      const response = await fetch('http://localhost:3000/api/feeds');
      
      if (!response.ok) {
        throw new Error('Erreur de réseau');
      }
      
      const data = await response.json();
      callback(data);
      
    } catch (error) {
      console.error('Erreur lors de la récupération des feeds :', error);
      return error
    }
}
  
document.addEventListener('DOMContentLoaded', async () => {
    // retrieve feeds
    await fetchFeeds(displayFeeds);

    //init "like" feature
    const { addLikeListeners } = await import('./modules/like.js');
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', addLikeListeners);
    });

    //init comment feature
    addCommentForm()

    //init full screen image
    const { openModal } = await import("./modules/modal-image.js");
    const images = document.querySelectorAll('[data-thumbnail-image]');
    images.forEach((image) => {
        image.addEventListener('click', () => {
            openModal(image.src); 
        });
    });
  
});   
  