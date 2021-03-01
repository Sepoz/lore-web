import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CardModel = () => {
    const gltf = useLoader(GLTFLoader, "/scene.gltf");

    return <primitive object={gltf.scene} dispose={null} />;
};

export default CardModel;
