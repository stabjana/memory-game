import React, { useEffect } from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import useGetImages from "./../../hooks/useGetImages"
import Loader from "./../Loader/Loader"
import styles from './Board.module.css';

const Board = (gameOptions) => {
    const [isLoading, setIsLoading] = useState(true);
    const images = useGetImages(gameOptions);
    console.log({ images });

    useEffect(() => {
        if (images.length > 0) setIsLoading(false);

    }, [images]);

    return (
        <div> {isLoading && <Loader />} </div>
    );
};

export default Board;
