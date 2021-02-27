import React from "react";

// three & co.
import { Canvas } from "react-three-fiber";
import { OrbitControls, Box, useTexture } from "@react-three/drei";

// css
import { Col } from "react-bootstrap";

// img
import cardBack from "../../img/CardBack.jpeg";

// Card2 (provisory) create 3D card with three.js
const Card2 = (props) => {
    // the only way I found to use a image through a path
    let front = `${process.env.PUBLIC_URL}${props.cardImg}`;

    const texture1 = useTexture(cardBack);
    const texture2 = useTexture(front);

    /* return two adjacent <Box/>, one acts as the front of the card and the other as the back. 
    I don't know how to texture a single card with a different front and back (sorry) */
    return (
        <Col>
            <Canvas
                pixelRatio={window.devicePixelRatio}
                camera={{ position: [0, 0, 2], fov: 75 }}
            >
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <Box args={[1.3, 2, 0.005]}>
                    <meshBasicMaterial attach="material" map={texture1} />
                </Box>
                <Box args={[1.3, 2, 0.001]} position={[0, 0, 0.005]}>
                    <meshBasicMaterial attach="material" map={texture2} />
                </Box>
            </Canvas>
        </Col>
    );
};

export default Card2;
