import styles from './Main.module.css';

const Main = () => {
    return(
        <main>
            <header className={styles['main-header']}>
                <p className={styles.featured}>featured movie</p>
                <span className={styles['see-more']}>See more &rarr;</span>
            </header>
        </main>
    );
}

export default Main;