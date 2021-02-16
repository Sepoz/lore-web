import "./CardInfo.css";

const CardInfo = (props) => {
    const { cardID, cardName, cardDescription, cardCreator } = props.cardData;

    return (
        <>
            <div className="card-info">
                <h1 className="card-name">{cardName}</h1>
                <p className="card-number">{`${cardID}/200`}</p>
                <p className="card-description">{cardDescription}</p>
                <p className="card-creator">{`Illus. ${cardCreator}`}</p>
            </div>
        </>
    );
};

export default CardInfo;
