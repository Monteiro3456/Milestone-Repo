// blog-script.js
document.addEventListener('DOMContentLoaded', () => {
    const currentBlog = JSON.parse(localStorage.getItem('currentBlog'));
  
    const blogPost = document.getElementById('blog-post');
    blogPost.innerHTML = `
      <h2 class="blog-title">${currentBlog.title}</h2>
      <img src="${currentBlog.img}" alt="Blog Image">
      <p class="blog-content">${currentBlog.content}</p>
    `;
  });

  
  