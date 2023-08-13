Simple Blog Website
The Simple Blog Website is a basic JavaScript application that displays a collection of blog posts with images, titles, summaries, and "Read More" buttons. Users can also add new blog posts by filling out a form.


Features
Display a list of blog posts with images, titles, and summaries.
Clicking on the "Read More" button redirects to a separate page to view the full blog post.
Add new blog posts using a form with image URL, title, description, and content.
Responsive design for various screen sizes.
Usage
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/simple-blog-website.git
Open the index.html file in your preferred web browser.

View the list of blog posts with their images, titles, and summaries.

To read a full blog post:

Click the "Read More" button on the desired blog post.
You will be redirected to a separate page (blog.html) to view the complete blog post.
To add a new blog post:

Click the "+ Add Blog" button to open the add blog form.
Fill in the image URL, title, description, and content.
Submit the form to add the new blog post to the list.
Functionality
The refreshBlogContainer function populates the blog container with blog posts based on the data array.
The showBlog function redirects users to a separate page (blog.html) to view the complete content of a selected blog post.
Users can add new blog posts using the "Add Blog" form. The form's data is used to create new blog entries in the data array.
Dependencies
The Simple Blog Website uses the following technologies:

JavaScript
HTML
CSS (for styling)
