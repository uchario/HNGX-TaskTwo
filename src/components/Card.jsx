/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import styles from './Card.module.css';

import imdbImg from '../assets/imdb.png';
import rottenImg from '../assets/rottentomatoes.png';

const IMAGE_URL = `http://image.tmdb.org/t/p/w185/`;

const Card = ({title, poster, releaseDate, id}) => {
    return(
        <div className={styles.card} data-testid='movie-card'>
            <Link to={`movies/${id}`} className={styles['movie-poster']}>
                <img 
                    src={IMAGE_URL+poster} 
                    data-testid='movie-poster'
                />
                <span 
                    className={styles['release-year']}
                    data-testid='movie-release-date'
                >
                        {releaseDate}
                </span>
            </Link>
            <span 
                className={styles['movie-title']} 
                data-testid='movie-title'
            >
                {title}
            </span>
            <div className={styles['movie-rating']}>
                <div className={styles['movie-imdb']}>
                    <img src={imdbImg}/>
                    <span>86.0/100</span>
                </div>
                <div className={styles['movie-rotten']}>
                    <img src={rottenImg}/>
                    <span>97%</span>
                </div>
            </div>
            <span className={styles['movie-genre']}>Action, Adventure, Horror</span>
        </div>
    );
}

export default Card;