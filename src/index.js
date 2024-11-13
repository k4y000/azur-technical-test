function fetchFeeds() {
    fetch('http://localhost:3000/api/feeds')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de réseau');
        }
        return response.json(); 
      })
      .then(data => {
        console.log('Données récupérées :', data);
        displayFeeds(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des feeds :', error);
      });
  }
  
  function displayFeeds(feeds) {
    const feedContainer = document.getElementById('feed-container');
    feedContainer.innerHTML = ''; 
  
    feeds.forEach(feed => {
      const feedElement = document.createElement('div');
      feedElement.classList.add('feed');
  
      feedElement.innerHTML = `
        <article class="post" data-id="${feed.id}">
            <div class="post__header">
            <img src="/assets/images/${feed.profileImage}" alt="${feed.name}" />
            <h2 class="post__username">${feed.name}</h2>
            </div>
            <p class="post__content">${feed.text}</p>
            <img src="/assets/images/${feed.postImage}" alt="Photo du post" class="post__image" />
            
            <div class="post__footer">
            <button class="post__reaction post__reaction--like">Like (${feed.likes})</button>
            <input type="text" placeholder="Commenter..." class="post__comment-input" />
            </div>

            <div class="comments">
                ${feed.comments.map(comment => `
                    <div class="comment">
                    <strong>${comment.user}</strong>: ${comment.comment}
                    </div>
                `).join('')}
            </div>
        </article>
        </div>
      `;
      feedContainer.appendChild(feedElement);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    fetchFeeds();
  });
  