import React, { useRef } from "react";

import { Canvas, useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

const SpinningBoxMesh = (props) => {
    const { position } = props;
    const mesh = useRef(null);

    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
        <mesh position={position} ref={mesh} castShadow>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <MeshWobbleMaterial
                attach="material"
                color="lightblue"
                speed={1}
                factor={0.6}
            />
        </mesh>
    );
};

const HomeAnimation = () => {
    return (
        <>
            <Canvas camera={{ position: [1, 1, 10], fov: 20 }} shadowMap>
                <ambientLight intensity={0.3} />
                <pointLight position={[-5, 0, -10]} intensity={0.5} />
                <pointLight position={[5, 0, 10]} intensity={0.5} />
                <directionalLight
                    position={[0, 10, 0]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-heigth={1024}
                    shadow-camera-left={-10}
                    shadow-camera-rigth={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <group>
                    <SpinningBoxMesh position={[0, 0, 0]} />
                    <SpinningBoxMesh position={[-2, 0, 0]} />
                    <SpinningBoxMesh position={[2, 0, 0]} />

                    <mesh
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -1, 0]}
                    >
                        <planeBufferGeometry
                            attach="geometry"
                            args={[100, 100]}
                        />
                        <shadowMaterial attach="material" opacity={0.4} />
                    </mesh>
                </group>
            </Canvas>
        </>
    );
};

export default HomeAnimation;
