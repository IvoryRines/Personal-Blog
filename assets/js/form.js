const username = document.getElementById('input-username');
const title = document.getElementById('input-title');
const content = document.getElementById('input-content');
const form = document.getElementById('form');

const blogPost = JSON.parse(localStorage.getItem('blogPost'))||[]

form.addEventListener('submit', addPost);

function addPost(event) {
    event.preventDefault()

    let newPost = {
        username: username.value,
        title: title.value,
        content: content.value,
    }

    blogPost.push(newPost);
    localStorage.setItem('blogPost', JSON.stringify(blogPost))
    
    username.value = ''
    title.value = ''
    content.value = ''
}