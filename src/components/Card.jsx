const Card = ({ source, alt, name, id, onClick }) => {
    return (
        <>
            <button className="card-wrapper" onClick={() => onClick(id)}>
                <img src={source} alt={alt} />
                <div className="card-name">{name}</div>
            </button>
        </>
    );
};

export default Card;
