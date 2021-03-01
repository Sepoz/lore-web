import React, { Suspense, useRef } from "react";

import { useFrame } from "react-three-fiber";
import { Html, Plane } from "@react-three/drei";

import CardModel from "../CardModel/CardModel";

import "./HomeAnimation.css";

const HomeAnimation = () => {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
        <>
            <pointLight position={[-5, 0, -10]} intensity={0.8} />
            <pointLight position={[5, 0, 10]} intensity={0.8} />

            <group>
                <Suspense fallback={null}>
                    <mesh
                        ref={mesh}
                        position={[-1, 0, -10]}
                        rotation={[1.5, 0.5, 0]}
                    >
                        <CardModel />
                    </mesh>
                </Suspense>

                <Plane args={[100, 100]} position={[0, 0, -20]}>
                    <meshBasicMaterial attach="material" color="#32435b" />
                </Plane>

                <Html fullscreen>
                    <div className="animation-container">
                        <h1>Dario Moccia's Lore Trading Cards</h1>
                    </div>
                </Html>
            </group>
        </>
    );
};

export default HomeAnimation;
