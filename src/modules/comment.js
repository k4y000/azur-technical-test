

const htmlForm = () => (`
    <form class="commentsForm">
        <input type="text" name="comment" placeholder="Commenter..." class="post__comment-input" />
        <button type="submit">Ajouter mon commentaire</button>
    </form>
`)

const htmlComment = (comment) => (`
    <div class="comment">
        <strong>Invité</strong>: ${comment}
    </div>
`)

const addComment = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const post = event.target.closest('[data-id]');
    post.querySelector('.comments').insertAdjacentHTML('afterBegin', htmlComment(comment));
    event.target.reset();
}


export function addCommentForm() {
    const posts = document.querySelectorAll("[data-id]")    
    posts.forEach((post) => {
        const comments = post.querySelector(".comments");
        if (comments) {
            comments.insertAdjacentHTML('beforeend', htmlForm());
            comments.querySelector('form').addEventListener('submit', addComment);
        }
    })
}   
