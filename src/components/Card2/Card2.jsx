import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Box, useTexture } from "@react-three/drei";

import "./Card2.css";

import cardBack from "../../img/CardBack.jpeg";

const Card2 = (props) => {
    let front = `${process.env.PUBLIC_URL}${props.cardImg}`;

    const texture1 = useTexture(cardBack);
    const texture2 = useTexture(front);

    return (
        <div className="canvas">
            <Canvas
                pixelRatio={window.devicePixelRatio}
                camera={{ position: [0.8, 0, 2] }}
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
        </div>
    );
};

export default Card2;
