
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=a94b09e4&t=Batman'


const moviesArray = ['Batman','Game Of Thrones','Avengers','Captain America','Toxic Avenger','Citizen Toxie']

let moviesData = []

async function getmoviesArrayData(array){

    // let newurl = `http://www.omdbapi.com/?i=tt3896198&apikey=a94b09e4&t=${movie}`
const moviesDataPromises = array.map(async (movie) => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a94b09e4&t=${movie}`)
    return response.json();
})

  moviesData = await Promise.all(moviesDataPromises)
 console.log(moviesData);
 
 displayMovies(moviesData)
}




function displayMovies(moviesData) {
    const movieContainer = document.getElementById('movieContainer');
  
    moviesData.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
  
      const movieImg = document.createElement('img');
      movieImg.src = movie.Poster;
      movieImg.alt = movie.Title;
      movieImg.classList.add('movie-img');
  
      const movieTitle = document.createElement('div');
      movieTitle.textContent = movie.Title;
      movieTitle.classList.add('movie-title');
  
      const watchNowBtn = document.createElement('button');
      watchNowBtn.textContent = 'Watch Now';
      watchNowBtn.classList.add('watch-now-btn');
  
      movieCard.appendChild(movieImg);
      movieCard.appendChild(movieTitle);
      movieCard.appendChild(watchNowBtn);
  
      movieContainer.appendChild(movieCard);
    });
  }



// serach button functionality

document.getElementById('searchButton').addEventListener('click', searchMovie);

async function searchMovie() {
  const searchInput = document.getElementById('searchInput').value.trim();
  if (searchInput === '') {
    alert('Please enter a valid movie name')
    return;

  }

  try {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a94b09e4&t=${searchInput}`);
    const movieData = await response.json();

    if (movieData.Response === 'True') {
      displayMovies([movieData]); // Display the single searched movie
    } else {
      alert('Sorry Movie not found')
      console.log('Movie not found');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// ... Your existing code ...





  
  getmoviesArrayData(moviesArray);
  // displayMovies(moviesData)
  
//   This code will dynamically fetch movie data from the OMDB API for the specified movies in the moviesArray, create movie cards for each movie, and display them in rows with their images, titles, and "Watch Now" buttons. You can further customize the styling and layout to match your design preferences.
  

