import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					
					<img src={movie.Poster} alt='movie'></img>
					
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='x'
					>
				<h4>{movie.Title}</h4>
				
				<h5>{movie.Year}</h5>

				<h6>{movie.Type}</h6><br></br>

						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
