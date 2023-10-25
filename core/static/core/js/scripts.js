//TMDB API Fetching

const apiKey = '2dee5883131980d704691cd79b8bde25';
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`; // 27 is the genre ID for horror movies

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Process the data here
        const movieContainer = document.getElementById('cards-row'); // Replace with the ID of your card container
        // Extract the first 6 movies from the API response
        const movies = data.results.slice(0, 6);

        movies.forEach(movie => {
            // Inside the <div class="row" id="cards-row"> in index.html it creates a
            // "col-lg-2 col-md-3 col-sm-4 col-6" with all the elements that I had before in index.html
            // but now it replaces the content with the information fetched from the API.
            const card = document.createElement('div');
            card.className = 'col-lg-2 col-md-3 col-sm-4 col-6';
            card.innerHTML = `
                <div class="movie-card m-auto">
                    <div class="movie-card-inner">
                        <div class="movie-card-image" style="background-image: url('https://image.tmdb.org/t/p/w500${movie.poster_path}');"></div>
                        <div class="movie-card-details">
                            <h3>${movie.title}</h3>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            `;
            movieContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
