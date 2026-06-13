import FlashCard from "./FlashCard";
import Navigation from "./Navigation";
import { Cards } from "../assets/data";
import { useState } from "react";

function createShuffledIndexes(length: number): number[] {
    const indexes = Array.from({ length }, (_, index) => index);
    for (let i = indexes.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [indexes[i], indexes[randomIndex]] = [indexes[randomIndex], indexes[i]];
    }
    return indexes;
}

export default function FlashCardDeck() {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [shuffledIndexes] = useState(() => createShuffledIndexes(Cards.length));

    function toggleFlip() {
        setFlipped((prev) => !prev);
    }
    function goForward() {
        setFlipped(false);
        setIndex((prev) => prev + 1);
    }
    function goBackward() {
        setFlipped(false);
        setIndex((prev) => prev - 1);
    }

    return (
        <>
            <FlashCard
                key={index}
                currentCard={Cards[shuffledIndexes[index]]}
                toggleFlip={toggleFlip}
                flipped={flipped}
            />

            <Navigation
                goForward={goForward}
                goBackward={goBackward}
                isFirst={index === 0}
                isLast={index === shuffledIndexes.length - 1}
            />
        </>
    );
}