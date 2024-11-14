    /* TODO: move to a JS module */
    // Like features
export function addLikeListeners(event) {
    const button = event.currentTarget;
    const likeCountElement = button.querySelector('.like-count');

    let likes = parseInt(button.dataset.likes, 10);
    likes += 1;
    button.dataset.likes = likes;
    likeCountElement.textContent = likes;

    button.classList.add('pop-animation');

    setTimeout(() => {
        button.classList.remove('pop-animation');
    }, 300);
}