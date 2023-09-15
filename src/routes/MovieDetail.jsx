import MovieContent from "../components/MovieContent";
import SideBar from "../components/SideBar";

import { useParams } from "react-router-dom";

import { useQuery } from 'react-query';
import { movieQuery } from '../queries/movieQuery';

import styles from './MovieDetail.module.css';

const MovieDetail = () => {
    const {id} = useParams();
    const {error, data} = useQuery(movieQuery(id));
    
    return(
        <div className={styles['movie-detail']}>
            <SideBar/>
            <MovieContent movie={data}/>
        </div>
    );
}

export default MovieDetail;