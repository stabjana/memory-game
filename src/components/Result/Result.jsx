import styles from './Result.module.css';

const Result = ({ restartGame }) => (
    <div className={`${styles.container} frosted`}>
        <p>Awesome!</p>
        <button className={`${styles.button} frosted`} onClick={restartGame}>
            Play Again
        </button>
    </div >
);

export default Result;

/* Result.propTypes = {
    restartGame: PropTypes.func.isRequired,
}; */