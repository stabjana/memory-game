import { useEffect, useState } from "react";
import { addUniqueIds, getFormedData, getPairedPics, shuffleCards } from "../utils";

const MAX_VISIBLE_CARDS = 2;

const useGameLogic = (images) => {

    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);

    const prepareCards = () => {
        const a = getFormedData(images);
        const b = getPairedPics(a);
        const c = addUniqueIds(b);
        const d = shuffleCards(c);
        setCards(d);
    };

    const flipCard = (clickedCardId) => {
        const flippedCards = cards.map(card => {
            if (card.uniqueId === clickedCardId) {
                card.isShown = true;
            }
            if (card.isShown) setVisibleCards(oldState => [...oldState, card.uniqueId])

            return card
        });

        setCards(flippedCards);
    };

    const onCardClick = clickedCardId => {
        if (visibleCards.length < MAX_VISIBLE_CARDS) {
            flipCard(clickedCardId);
        }
    };

    useEffect(() => {
        if (images.length > 0) prepareCards();
    }, [JSON.stringify(images)]);

    return { cards, onCardClick };
};

export default useGameLogic;
