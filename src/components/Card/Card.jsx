import { useState } from "react";

import { Figure, Col } from "react-bootstrap";

import cardBack from "../../img/CardBack.jpeg";
import darioMoccia from "../../img/DarioMoccia.jpeg";

const Card = () => {
    const [rotateX, setRotateX] = useState("rotateX(0deg)");
    const [rotateY, setRotateY] = useState("rotateY(0deg)");
    const [viewBack, setViewBack] = useState(false);

    const handleMouseMove = (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 8;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 8;

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
            <Col
                sm={7}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Figure
                    style={rotateStyle}
                    onDoubleClick={() => setViewBack(!viewBack)}
                >
                    {viewBack ? (
                        <Figure.Image
                            width={360}
                            height={600}
                            alt="180x300"
                            src={cardBack}
                        />
                    ) : (
                        <Figure.Image
                            width={360}
                            height={600}
                            alt="180x300"
                            src={darioMoccia}
                        />
                    )}
                </Figure>
            </Col>
        </>
    );
};

export default Card;
