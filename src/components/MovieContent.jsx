/* eslint-disable react/prop-types */
import styles from './MovieContent.module.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import movieImg from '../assets/movieimage.png';
import movieAdImg from '../assets/movieadvert.png';

const MovieContent = ({movie}) => {
    const utcDate = new Date(movie?.release_date).toUTCString().slice(0, 17);

    return(
        <section className={styles['movie-section']}>
            <div className={styles['movie-section__top']}>
                <img src={movieImg} className={styles['movie-image']}/>
                <div className={styles['movie-play']}>
                    <button className={styles['play-btn']}>
                        <FontAwesomeIcon icon={faPlay} style={{color: '#fff', fontSize: '5rem'}}/>
                    </button>
                    <span>Watch Trailer</span>
                </div>
            </div>
            <div className={styles['movie-section__mid']}>
                <div className={styles['movie-details']}>
                    <p data-testid='movie-title'>{movie?.title}</p>
                    <ul className={styles['movie-details__list']}>
                        <li data-testid='movie-release-date'>{utcDate}</li>
                        <li>PG-13</li>
                        <li data-testid='movie-runtime'>{movie?.runtime}</li>
                    </ul>
                    <div className={styles['genre-pill']}>
                        <span>Action</span>
                        <span>Drama</span>
                    </div>
                </div>
                <div className={styles.rating}>
                    <img/>
                    <p className={styles['rating-section']}>
                        <FontAwesomeIcon icon={faStar} style={{color: "#edb007",}} />
                        <span className={styles['rating-star']}>8.5</span> 
                        &#124; 
                        <span className={styles['rating-num']}>350k</span>
                    </p>
                </div>
            </div>
            <div className={styles['movie-section__lower']}>
                <div className={styles['movie-summary']}>
                    <p data-testid='movie-overview' className={styles['movie-overview']}>
                        {movie?.overview}
                    </p>
                    <p>Director: <span className={styles['movie-director']}>Joseph Kosinski</span></p>
                    <p>Writers: <span className={styles['movie-writers']}>Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                    <p>Stars: <span className={styles['movie-stars']}>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                    <div className={styles['rating-nomination']}>
                        <p className={styles['rating-label']}>
                            Top rated movie #65
                        </p>
                        <div className={styles['nomination']}>
                            <span>Awards 9 nominations</span>
                            <FontAwesomeIcon icon={faChevronDown} style={{color: '#c7c7c7'}}/>
                        </div>
                    </div>
                </div>
                <div className={styles['movie-ads']}>
                    <div className={styles['movie-links']}>
                        <Link to={``} className={styles['show-time']}>
                            <FontAwesomeIcon icon={faTicket} />
                            <span>See Showtimes</span>
                        </Link>
                        <Link to={``} className={styles['watch-options']}>
                            <FontAwesomeIcon icon={faList} />
                            <span>More watch options</span>
                        </Link>
                    </div>
                    <div className={styles['movie-ads']}>
                        <img src={movieAdImg}/>
                        <div className={styles['movie-ad-overlay']}>
                            <FontAwesomeIcon icon={faList} />
                            <p>The Best Movies and Shows in September</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieContent;