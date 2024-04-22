const username = document.getElementById('input-username');
const title = document.getElementById('input-title');
const content = document.getElementById('input-content');
const form = document.getElementById('form');

const blogPost = JSON.parse(localStorage.getItem('blogPost'))||[]


function addPost(event) {
    event.preventDefault()

    // Check if any of the fields are blank
    if (username.value.trim() === '' || title.value.trim() === '' || content.value.trim() === '') {
      alert('Please fill in all fields.'); // Display an alert message
      return; // Exit the function if any field is blank
    }

    // If all fields are filled, proceed to add the post
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

    window.location.href = 'blog.html';
}

form.addEventListener('submit', addPost);
