import { useState } from "react";

import "./Card.css";

import cardBack from "../../img/CardBack.jpeg";

const Card = (props) => {
    const [rotateX, setRotateX] = useState("rotateX(0deg)");
    const [rotateY, setRotateY] = useState("rotateY(0deg)");
    const [viewBack, setViewBack] = useState(false);

    const handleMouseMove = (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

        setRotateX(`rotateX(${yAxis}deg)`);
        setRotateY(`rotateY(${xAxis}deg)`);
    };

    const handleMouseEnter = () => {};

    const handleMouseLeave = () => {
        setRotateX("rotateX(0deg)");
        setRotateY("rotateY(0deg)");
    };

    const rotateStyle = {
        transform: rotateY + rotateX,
    };

    return (
        <>
            <div
                sm={7}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="card-container"
            >
                <div className="cards">
                    {viewBack ? (
                        <img
                            alt="Dario Moccia's Lore Trading Card"
                            src={cardBack}
                            style={rotateStyle}
                            onDoubleClick={() => setViewBack(!viewBack)}
                            className="card"
                        />
                    ) : (
                        <img
                            alt="Dario Moccia's Lore Trading Card"
                            src={`${process.env.PUBLIC_URL}${props.cardImg}`}
                            style={rotateStyle}
                            onDoubleClick={() => setViewBack(!viewBack)}
                            className="card"
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Card;
