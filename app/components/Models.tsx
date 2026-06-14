"use client";

import { Float, useGLTF } from "@react-three/drei";

type ModelProps = {
  scale?: number;
  position?: [number, number, number];
};

export default function Model({
  scale = 0.15,
  position = [0, -1, 0],
}: ModelProps) {
  const { scene } = useGLTF("/models/laptop.glb");

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <primitive object={scene} position={position} scale={scale} />
    </Float>
  );
}
