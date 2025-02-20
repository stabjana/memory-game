import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url }) => (
    <div>
        <img src={url} alt="" width="200" />
    </div>
);

export default Image;

// prop types: 57:10