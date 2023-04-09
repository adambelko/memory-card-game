import { useState, useEffect } from "react";
import Header from "./Header";
import Gameboard from "./Gameboard";
import cardList from "./utils/cardList";

const App = () => {
    const [cards, setCards] = useState(cardList);

    const shuffleCards = (arr) => {
        arr.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        shuffleCards(cards);
    });

    return (
        <>
            <Header />
            <Gameboard cards={cards} />
        </>
    );
};

export default App;
