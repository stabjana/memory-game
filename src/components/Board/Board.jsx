import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useGetImages from "./../../hooks/useGetImages"
import Loader from "./../Loader/Loader"
import useGameLogic from '../../hooks/useGameLogic';
import Card from '../Card/Card';
import styles from './Board.module.css';

const Board = ({ gameOptions }) => {
    const [isLoading, setIsLoading] = useState(true);
    const images = useGetImages(gameOptions);
    const { cards, onCardClick } = useGameLogic(images);

    useEffect(() => {
        if (images.length > 0) {
            setIsLoading(false)
        };

    }, [images]);

    return (
        <div>
            {isLoading ? <Loader /> :
                !isLoading && (
                    cards.map(card => <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />)
                )}
        </div>
    );
};

export default Board;


Board.proptypes = {
    gameOptions: PropTypes.shape({
        pace: PropTypes.string.isRequired,
        cardsCount: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    }),
}
// fetch images is empty array! when click start button
// weiter ab 54 minute!!!