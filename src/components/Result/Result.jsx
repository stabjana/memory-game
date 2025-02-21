import styles from './Result.module.css';

const Result = () => (
    <div className={`${styles.container}`} onClick={onClick}>
        <div className={`${styles.card} ${card.isShown ? styles.flipped : ''}`}>
        </div>
    </div >
);

export default Result;
