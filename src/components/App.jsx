import { useState } from "react";
import Header from "./Header";
import Gameboard from "./Gameboard";
import cardList from "./utils/CardList";
import Scoreboard from "./Scoreboard";

const App = () => {
    const shuffleCards = (arr) => {
        return arr.sort(() => Math.random() - 0.5);
    };

    const [cards, setCards] = useState(shuffleCards(cardList));
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState("");

    const onClick = (id) => {
        const selCard = cards.find((card) => card.id === id);

        if (selCard.clicked === false) {
            const updatedCards = cards.map((card) => {
                return card.id === id ? { ...card, clicked: true } : card;
            });

            setCards(shuffleCards(updatedCards));
            setCurrScore(currScore + 1);
        } else {
            if (currScore > bestScore) setBestScore(currScore);
            setCurrScore(0);
            setCards(shuffleCards(cardList));
        }
    };

    return (
        <>
            <Header />
            <Scoreboard currScore={currScore} bestScore={bestScore} />
            <Gameboard cards={cards} onClick={onClick} />
        </>
    );
};

export default App;
