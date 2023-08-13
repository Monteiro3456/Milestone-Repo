
The Movie Info Web App is a simple JavaScript application that allows users to retrieve and display movie information from the OMDB API. The app fetches movie data for a predefined list of movies and provides a search functionality to find specific movies by title.



Features
Fetches movie data from the OMDB API.
Displays movie cards with images, titles, and "Watch Now" buttons.
Supports searching for movies by title.
Responsive design for various screen sizes.

Prerequisites
To run the Movie Info Web App locally, you'll need the following:

A modern web browser that supports JavaScript.
An internet connection to fetch movie data from the OMDB API.
Usage
Clone the repository to your local machine:


Open the index.html file in your preferred web browser.

The app will automatically fetch and display movie data for the predefined list of movies upon loading.

To search for a specific movie:

Enter the movie title in the search input field.
Click the "Search" button.
If the movie is found, its details will be displayed in a movie card.
Configuration
To customize the list of movies or other settings, you can modify the following parts of the code:

Update the moviesArray with your desired list of movie titles in the script.js file.
Modify the OMDB API URL (url variable) in the script.js file if needed.
Dependencies
The Movie Info Web App uses the following technologies:

JavaScript
HTML
CSS (for styling)
