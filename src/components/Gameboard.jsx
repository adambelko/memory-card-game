import Card from "./Card";

const Gamemeboard = ({ cards }) => {
    return (
        <>
            <main>
                {console.log(cards)}
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        name={card.name}
                        alt={card.name}
                        source={card.imgSrc}
                    />
                ))}
            </main>
        </>
    );
};

export default Gamemeboard;
