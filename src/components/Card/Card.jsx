import { useState } from "react";

import "./Card.css";

import cardBack from "../../img/CardBack.jpeg";
import darioMoccia from "../../img/DarioMoccia.jpeg";

const Card = () => {
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
                            alt="180x300"
                            src={cardBack}
                            style={rotateStyle}
                            onDoubleClick={() => setViewBack(!viewBack)}
                            className="card"
                        />
                    ) : (
                        <img
                            alt="180x300"
                            src={darioMoccia}
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
