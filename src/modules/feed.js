export function displayFeeds(feeds) {
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
          ${feed.postImage ? `<img src="/assets/images/${feed.postImage}" data-thumbnail-image alt="Photo du post" class="post__image" />` : ''}
          <div class="post__footer">
              <button class="like-button" data-likes="${feed.likes}">
                  👍 <span class="like-count">${feed.likes}</span>
              </button>
              <button class="like-button" data-likes="${feed.dislikes}">
                  👎 <span class="like-count">${feed.dislikes}</span>
              </button>
              <button class="like-button" data-likes="${feed.loves}">
                  🥰 <span class="like-count">${feed.loves}</span>
              </button>
          </div>
          <div class="comments">
              ${feed.comments.map(comment => `
                  <div class="comment">
                      <strong>${comment.user}</strong>: ${comment.comment}
                  </div>
              `).join('')}
          </div>
      </article>
  `;
  
      feedContainer.appendChild(feedElement);
    });
}