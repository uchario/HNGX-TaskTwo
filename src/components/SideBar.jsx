import { Link, NavLink } from 'react-router-dom';

import styles from './SideBar.module.css';

import tvImg from '../assets/tv.png';
import homeImg from '../assets/home.png';
import tvShowImg from '../assets/tvshow.png';
import calendarImg from '../assets/calendar.png';
import logoutImg from '../assets/logout.png';

const SideBar = () => {
    return(
        <section className={styles['side-bar']}>
            <Link to={`/`} className={styles['home-icon']}>
                <img src={tvImg}/>
                <span>MovieBox</span>
            </Link>
            <div className={styles['menu-items']}>
                <NavLink 
                    to={`/`}
                    className={({ isActive, isPending }) => 
                        isPending ? 'pending' : isActive ? 'active' : ''    
                    }   
                >
                    <img src={homeImg}/>
                    <span>Home</span>
                </NavLink>
                <NavLink 
                    to={``}
                    className={styles.active}   
                >
                    <img src={tvShowImg}/>
                    <span>Movies</span>
                </NavLink>
                <NavLink
                    to={``}
                    className={({ isActive, isPending }) => 
                                isPending ? 'pending' : isActive ? 'active' : ''
                            }   
                >
                    <img src={tvShowImg}/>
                    <span>TV Series</span>
                </NavLink>
                <NavLink 
                    to={``}
                    className={({ isActive, isPending }) => 
                                isPending ? 'pending' : isActive ? 'active' : ''
                }       
                >
                    <img src={calendarImg}/>
                    <span>Upcoming</span>
                </NavLink>
            </div>
            <div className={styles.playing}>
                <p className={styles['playing-bold']}>
                    Play movie quizes
                    and earn
                    free tickets
                </p>
                <p className={styles['playing-light']}>
                    50k people are playing
                    now
                </p>
                <Link to={``} className={styles['playing-pill']}>
                    Start playing
                </Link>
            </div>
            <div className={styles.logout}>
                <img src={logoutImg}/>
                <p>Log out</p>
            </div>
        </section>
    );
}

export default SideBar;