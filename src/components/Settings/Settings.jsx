import React from 'react';
import { useState } from 'react';
import { CATEGORIES, PACE, INITIAL_CARDS_COUNT } from '../../constants.js';
import RadioBox from '../RadioBox/RadioBox.jsx';
import Counter from '../Counter/Counter.jsx'
import PropTypes from 'prop-types';

import styles from './Settings.module.css';

const Settings = ({ startGame }) => {
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [pace, setPace] = useState(CATEGORIES[0]);
    const [cardsCount, setCardsCount] = useState(INITIAL_CARDS_COUNT);

    const onStartGameClick = () => {
        startGame({ category, pace, cardsCount }); // we pass props to app component (parent)
        // it will call the function prop that is passed to the function in app
    };

    return (
        <div className={styles.settings}>
            <h2>Settings</h2>
            <h4>Category:</h4>
            <div className={styles.setting}>
                {CATEGORIES.map(item => (
                    <RadioBox
                        key={item}
                        name={item}
                        selectedItem={category}
                        onChange={(e) => setCategory(e.target.value)} />
                ))}
            </div>

            <h4>Amount of cards:</h4>
            <div className={styles.settings}>
                <Counter cardsCount={cardsCount} onClick={setCardsCount} />

            </div>

            <h4>Pace:</h4>
            <div className={styles.setting}>
                {PACE.map(item => (
                    <RadioBox
                        key={item}
                        name={item}
                        selectedItem={pace}
                        onChange={(e) => setPace(e.target.value)} />
                ))}
            </div>
            <button className={styles.button} onClick={onStartGameClick} >Start</button>
        </div>
    );
};

export default Settings;

Settings.propTypes = {
    startGame: PropTypes.func.isRequired,
}