const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});





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