import React from 'react';
import css from './MovieDetails.module.css';

export const MovieDetails = ({ movieDetails }) => {
  return (
    <div className={css.detailsContainer}>
      <img
        
        src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
        className={css.detailsImg}
      />
      <h3 className={css.detailsTitle}>
        {movieDetails.title}({new Date(movieDetails.release_date).getFullYear()}
        )
      </h3>
      <p className={css.detailsVote}>User vote: {movieDetails.vote_average}</p>
      <p className={css.detailsOverview}>Overview</p>
      <p className={css.detailsOverViewText}>{movieDetails.overview}</p>
      <p className={css.detailsGenres}>Genres</p>
      <p className={css.detailsGenresText}>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
    </div>
  );
};
