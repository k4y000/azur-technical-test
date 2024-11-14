import { displayFeeds } from "./modules/feed.js";

async function fetchFeeds() {
    try {
      const response = await fetch('http://localhost:3000/api/feeds');
      
      if (!response.ok) {
        throw new Error('Erreur de réseau');
      }
      
      const data = await response.json();
      console.log('Données récupérées :', data);
      
      displayFeeds(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des feeds :', error);
    }
}
  
document.addEventListener('DOMContentLoaded', async () => {
    // retrieve feeds
    await fetchFeeds();

    //init "like" feature
    const { addLikeListeners } = await import('./modules/like.js');
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', addLikeListeners);
    });
});   
  