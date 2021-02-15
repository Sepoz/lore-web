import "./VerticalNav.css";

const VerticalNav = (props) => {
    return (
        <>
            <ul className="vertical-nav">
                {props.cardsData.map((card) => (
                    <li key={card.cardID} className="nav-element">
                        {card.cardName}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default VerticalNav;
