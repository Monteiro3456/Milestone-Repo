const data = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN0HbgJzNjgfqEbKrp0JZiWswI65z29SJhq4f_07D&s',
    title: 'Pw skills four year residental program',
    summary: 'Building bridges to success with our accomplished mentors',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN0HbgJzNjgfqEbKrp0JZiWswI65z29SJhq4f_07D&s',
    title: 'Pw skills four year residental program',
    summary: 'Building bridges to success with our accomplished mentors',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/beach-sea-18378306.jpg',
    title: 'Pw skills four year residental program',
    summary: 'Building bridges to success with our accomplished mentors',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLN0HbgJzNjgfqEbKrp0JZiWswI65z29SJhq4f_07D&s',
    title: 'Pw skills four year residental program',
    summary: 'Building bridges to success with our accomplished mentors',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // Add more data entries as needed
];

const blogContainer = document.getElementById('blog-container');


function refreshBlogContainer(data){
data.forEach((blog, index) => {
  const blogPost = document.createElement('div');
  blogPost.classList.add('blog-post');

  const img = document.createElement('img');
  img.src = blog.img;
  img.alt = 'Blog Image';
  blogPost.appendChild(img);

  const title = document.createElement('h2');
  title.classList.add('blog-title');
  title.textContent = blog.title;
  blogPost.appendChild(title);

  const summary = document.createElement('p');
  summary.classList.add('blog-summary');
  summary.textContent = blog.summary;
  blogPost.appendChild(summary);

  const readMore = document.createElement('button');
  readMore.classList.add('read-more');
  readMore.textContent = 'Read More';
  readMore.addEventListener('click', () => showBlog(index));
  blogPost.appendChild(readMore);

  blogContainer.appendChild(blogPost);
});

}

function showBlog(index) {
  const blog = data[index];
  localStorage.setItem('currentBlog', JSON.stringify(blog));
  window.location.href = 'blog.html'; // Redirect to a separate page
}



// functionality for adding a new blog



const addBlogBtn = document.getElementById('add-blog-btn');
const addBlogForm = document.getElementById('add-blog-form');
const blogForm = document.getElementById('blog-form');

addBlogBtn.addEventListener('click', () => {
  addBlogForm.style.display = 'block';
  console.log('+ btn clicked');
});


blogForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const imgUrl = document.getElementById('img-url').value;
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const content = document.getElementById('content').value;

  const newBlog = { img: imgUrl, title, summary: description, content };
  data.push(newBlog);

  refreshBlogContainer(data);
  resetForm();
  addBlogForm.style.display = 'none';
});

// function refreshBlogContainer() {
//   blogContainer.innerHTML = '';
//   data.forEach((blog, index) => {
//     const blogPost = document.createElement('div');
//     // Create and append blog post elements here...
//     blogContainer.appendChild(blogPost);
//   });
// }

function resetForm() {
  document.getElementById('img-url').value = '';
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('content').value = '';
}



// Initialize blog container
refreshBlogContainer(data);


