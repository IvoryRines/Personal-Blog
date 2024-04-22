// Retrieve blog posts from local storage
const blogPosts = JSON.parse(localStorage.getItem('blogPost'));

// Check if there are any blog posts
if (blogPosts && blogPosts.length > 0) {
    // Access the container where you want to display the posts
    const blogPostsContainer = document.getElementById('blogPostsContainer');

    // Iterate over each blog post and create HTML elements to display them
    blogPosts.forEach(post => {
        // Create elements
        const postContainer = document.createElement('div');
        postContainer.classList.add('blog-post');

        const postTitle = document.createElement('h4');
        postTitle.classList.add('blog-post-title');
        postTitle.textContent = post.title;

        const postContent = document.createElement('div');
        postContent.classList.add('blog-post-content');
        postContent.textContent = post.content;

        const postedBy = document.createElement('h6');
        postedBy.classList.add('posted-by');
        postedBy.textContent = `Posted by: ${post.username}`;

        // Append elements to the container
        
        postContainer.appendChild(postTitle);
        postContainer.appendChild(postContent);
        postContainer.appendChild(postedBy);
        
        blogPostsContainer.appendChild(postContainer);
    });
}
    
    


