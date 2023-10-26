document.addEventListener('DOMContentLoaded', () => {
    // TMDB API Fetching
    const apiKey = '2dee5883131980d704691cd79b8bde25';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Process the data
            const movieContainer = document.getElementById('cards-row'); // ID of the card container
            // Extract the first 6 movies from the API response
            const movies = data.results.slice(0, 6);
            console.log(movies)

            movies.forEach(movie => {
                // Inside the <div class="row" id="cards-row"> in index.html it creates a
                // "col-lg-2 col-md-3 col-sm-4 col-6" with all the elements that I had before in index.html
                // but now it replaces the content with the information fetched from the API.
                const card = document.createElement('div');
                card.className = 'col-lg-2 col-md-3 col-sm-4 col-6';
                card.innerHTML = `
                <div class="movie-card m-auto" data-poster-path="${movie.poster_path}" data-bg-image="https://image.tmdb.org/t/p/original${movie.backdrop_path}">
                        <div class="movie-card-inner">
                            <div class="movie-card-image" style="background-image: url('https://image.tmdb.org/t/p/w500${movie.poster_path}');"></div>
                            <div class="movie-card-details">
                                <h3 class="movie-title">${movie.title}</h3>
                                <a href="#" class="read-more-button">Read More</a>
                            </div>
                        </div>
                    </div>
                `;
                movieContainer.appendChild(card);
            });

    const cards = document.querySelectorAll('.movie-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const bgImage = card.getAttribute('data-bg-image');
            console.log(bgImage);
            const heroContainer = document.getElementById('hero-container');
            heroContainer.style.backgroundImage = `url('${bgImage}')`;
        });

        card.addEventListener('mouseleave', () => {
            // Restore the default background image of #hero-container
            const heroContainer = document.getElementById('hero-container');
            heroContainer.style.backgroundImage = 'url(/static/core/images/hero-horror-blurred.jpg)';
        });
    });
});
        })
        .catch(error => {
            console.error('Error:', error);
        });

    
