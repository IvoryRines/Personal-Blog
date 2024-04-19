function toggleMode() {
  const icon = document.getElementById('mode-icon');
  const currentMode = document.body.classList.contains('dark-mode');

  if (currentMode) {
    document.body.classList.remove('dark-mode');
    icon.innerHTML = '🌘'; // Moon emoji for light mode
  } else {
    document.body.classList.add('dark-mode');
    icon.innerHTML = '☀️'; // Sun emoji for dark mode
  }
}




const username = document.getElementById('input-username');
const title = document.getElementById('input-title');
const content = document.getElementById('input-content');
const form = document.getElementById('form');

const blogPost = JSON.parse(localStorage.getItem('blogPost'))||[]


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

    window.location.href = 'blog.html';
}

form.addEventListener('submit', addPost);
