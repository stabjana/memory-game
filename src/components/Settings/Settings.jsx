import React from 'react';
import { useState } from 'react';
import { CATEGORIES } from '../../constants.js';
import RadioBox from '../RadioBox/RadioBox.jsx'
import PropTypes from 'prop-types';

import styles from './Settings.module.css';

const Settings = () => {
    const [category, setCategory] = useState(CATEGORIES[0]);

    return (
        <div className={styles.settings}>
            <h2>Settings</h2>
            <h4>Category:</h4>
            <div className={styles.setting}>
                {CATEGORIES.map(item => (
                    <RadioBox key={item} name={item} selectedItem={category} onChange={(e) => setCategory(e.target.value)} />
                ))}
            </div>
        </div>
    );
};

export default Settings;
