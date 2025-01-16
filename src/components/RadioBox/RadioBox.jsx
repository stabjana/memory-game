import React from 'react';
import PropTypes from 'prop-types';

import styles from './RadioBox.module.css';

const RadioBox = ({ name }) => {
    return (
        <div>
            <input type="radio" name={name} id={name} />
        </div>
    );
};

export default RadioBox;
