"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import Model from "./Models";




const VIEWS = {
  Nav: Math.PI / 6,    // left
  Home: 0,             // centeR
  About: -Math.PI / 6,  // right
} as const;

export type ViewKey = keyof typeof VIEWS;

type ModelViewerProps = {
  activeView: ViewKey;
  onViewChange: (view: ViewKey) => void;
};

function getViewPosition(view: ViewKey, isMobile: boolean): [number, number, number] {
  const y = isMobile ? 0.6 : 1;
  const distance = isMobile ? 3.5 : 5;
  const theta = VIEWS[view];

  return [distance * Math.sin(theta), y, distance * Math.cos(theta)];
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

function ResponsiveCamera({ isMobile }: { isMobile: boolean }) {
  const { camera } = useThree();

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;

    const spherical = new THREE.Spherical().setFromVector3(camera.position);
    const y = isMobile ? 0.6 : 1;
    const distance = isMobile ? 3.5 : 5;

    camera.position.set(
      distance * Math.sin(spherical.theta),
      y,
      distance * Math.cos(spherical.theta),
    );
    camera.fov = isMobile ? 58 : 50;
    camera.updateProjectionMatrix();
  }, [camera, isMobile]);

  return null;
}

export default function ModelViewer({
  activeView,
  onViewChange,
}: ModelViewerProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const isMobile = useIsMobile();

  const goToView = (view: ViewKey) => {
    const controls = controlsRef.current;
    if (!controls) return;

    const offset = new THREE.Vector3()
      .copy(controls.object.position)
      .sub(controls.target);
    const spherical = new THREE.Spherical().setFromVector3(offset);
    const targetTheta = VIEWS[view];

    gsap.to(spherical, {
      theta: targetTheta,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: () => {
        offset.setFromSpherical(spherical);
        controls.object.position.copy(controls.target).add(offset);
        controls.update();
      },
    });

    onViewChange(view);
  };

  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: getViewPosition(activeView, isMobile), fov: 50 }}
        dpr={isMobile ? 1 : [1, 2]}
        className="h-full w-full touch-none cursor-grab bg-transparent active:cursor-grabbing"
      >
        <ResponsiveCamera isMobile={isMobile} />
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <Model
          scale={isMobile ? 0.11 : 0.15}
          position={isMobile ? [0, -0.8, 0] : [0, -1, 0]}
        />
        <Environment preset="city" />
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={isMobile ? 0.6 : 1}
        />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:bottom-8 sm:gap-2">
        {(Object.keys(VIEWS) as ViewKey[]).map((view) => (
          <button
            key={view}
            type="button"
            onClick={() => goToView(view)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-colors sm:px-4 sm:py-2 sm:text-sm cursor-pointer ${
              activeView === view
                ? "bg-primary text-primary-foreground"
                : "border border-input bg-background/80 text-white hover:bg-accent"
            }`}
          >
            {view}
          </button>
        ))}
      </div>
    </div>
  );
}
