import React from 'react';
import { CATEGORIES } from '../../constants.js'
import PropTypes from 'prop-types';

import styles from './Settings.module.css';

const Settings = () => {
    return (

        <div className={styles.settings}>
            <h2>Settings</h2>
            <h4>Category:</h4>
            <div className={styles.settings}>
                {CATEGORIES.map(item => (
                    <RadioBox key={item} name={item} />
                ))}
            </div>
        </div>
    );
};

export default Settings;
