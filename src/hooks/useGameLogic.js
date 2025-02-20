import { useEffect, useState } from "react";
import { addUniqueIds, getFormedData, getPairedPics, shuffleCards } from "../utils";

const useGameLogic = (images) => {

    const [cards, setCards] = useState([]);

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

            return card
        });

        setCards(flippedCards);
    };

    const onCardClick = clickedCardId => {
        flipCard(clickedCardId);
    };

    useEffect(() => {
        if (images.length > 0) prepareCards();
    }, [JSON.stringify(images)]);

    return { cards, onCardClick };
};

export default useGameLogic;
