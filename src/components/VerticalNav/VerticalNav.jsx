import React from "react";

import cardsData from "../../cardsData/cardsData";

// VerticalNav, if you click on one of its elements it will display them in the page

/* map through all the cards (cardsData), return a <li> with every card name 
and use setCard to send back the data from the element you clicked */
const VerticalNav = (props) => {
    const setCard = props.setCard;

    return (
        <>
            <ul className="vertical-nav">
                {cardsData.map((card) => (
                    <li
                        key={card.cardID}
                        className="nav-element"
                        onClick={() => setCard(card)}
                    >
                        {card.cardName}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default VerticalNav;
