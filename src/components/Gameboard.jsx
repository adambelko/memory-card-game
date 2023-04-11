import Card from "./Card";

const Gamemeboard = ({ cards, onClick }) => {
    return (
        <>
            <main>
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        alt={card.name}
                        source={card.imgSrc}
                        onClick={onClick}
                    />
                ))}
            </main>
        </>
    );
};

export default Gamemeboard;
