const Card = ({ source, alt, name }) => {
    return (
        <>
            <div className="card-wrapper">
                <img src={source} alt={alt} />
                <div className="card-name">{name}</div>
            </div>
        </>
    );
};

export default Card;
