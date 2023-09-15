import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { useQuery } from 'react-query';
import { moviesQuery } from '../queries/moviesQuery';

import Card from './Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import styles from './Main.module.css';
import { useAtom } from 'jotai';

const Main = () => {
    const {error, data} = useQuery(moviesQuery());
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        if(data) {
            setMovies(data);
        }
    }, [data]);

    return(
        <main className={styles.main}>
            <header className={styles['main-header']}>
                <p className={styles.featured}>featured movie</p>
                <Link to={``} className={styles['see-more']}>
                    <span>See more</span> 
                    <FontAwesomeIcon icon={faChevronRight}/>
                </Link>
            </header>
            <div className={styles['movie-list']}>
                {movies?.map((movie) => (
                    <Card
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster={movie.poster_path}
                        releaseDate={movie.release_date}
                    />
                ))}
            </div>
        </main>
    );
}

export default Main;