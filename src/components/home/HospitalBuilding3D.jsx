import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { BuildingModel } from "./BuildingModel";
import { Compass, RotateCw } from "lucide-react";

function BuildingScene({ isDragging, controlsRef, isSnapping, setIsSnapping }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!controlsRef.current) return;
    const angle = controlsRef.current.getAzimuthalAngle();
    const isBackside = Math.abs(angle) > 2.2;

    if (isSnapping) {
      const cur = controlsRef.current.getAzimuthalAngle();
      const step = (0 - cur) * Math.min(1, delta * 10);
      controlsRef.current.setAzimuthalAngle(cur + step);
      controlsRef.current.update();
      if (Math.abs(cur) < 0.04) {
        controlsRef.current.setAzimuthalAngle(0);
        controlsRef.current.update();
        setIsSnapping(false);
      }
    } else if (!isDragging) {
      if (isBackside) {
        setIsSnapping(true);
      } else {
        controlsRef.current.setAzimuthalAngle(angle + delta * 0.10);
        controlsRef.current.update();
      }
    }
  });

  return (
    <group ref={groupRef}>
      <BuildingModel />
    </group>
  );
}

function HospitalLighting() {
  return (
    <>
      <ambientLight intensity={1.05} color="#F8F4EE" />
      <directionalLight
        position={[18, 26, 16]}
        intensity={3.0}
        color="#FFF8E8"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0002}
        shadow-camera-left={-18}
        shadow-camera-right={18}
        shadow-camera-top={22}
        shadow-camera-bottom={-10}
        shadow-camera-near={0.5}
        shadow-camera-far={60}
      />
      <directionalLight position={[-20, 16, -14]} intensity={0.65} color="#D8E8F8" />
      <directionalLight position={[0, -3, 18]} intensity={0.45} color="#FCE8D0" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[1.5, -0.06, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <shadowMaterial opacity={0.22} />
      </mesh>
    </>
  );
}

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-50/80 to-orange-50/60 z-20 rounded-3xl">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-4 border-[#E94B1C]/30 border-t-[#E94B1C] animate-spin" />
        <p className="text-sm font-semibold text-slate-600">Loading 3D Model...</p>
      </div>
    </div>
  );
}

export function HospitalBuilding3D() {
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const controlsRef = useRef();

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setWebGLSupported(false);
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  const snapToFront = () => { setIsSnapping(true); };
  const resetView = () => { if (controlsRef.current) controlsRef.current.reset(); };

  if (!webGLSupported) {
    return (
      <div className="relative w-full h-[540px] rounded-3xl overflow-hidden border border-[#E94B1C]/15 shadow-2xl bg-gradient-to-br from-amber-50/50 to-orange-50/30">
        <img src="/images/surya-hospital-building-hero.jpg" alt="Surya Hospital Building" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#ECECE5] via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[480px] lg:h-[580px] select-none">
      {!isLoaded && <Loader />}

      <div className="w-full h-full cursor-grab active:cursor-grabbing rounded-3xl overflow-hidden bg-gradient-to-b from-sky-100/60 via-amber-50/40 to-[#ECECE5]/60">
        <Canvas
          shadows
          camera={{ position: [1.5, 8.5, 44], fov: 40, near: 0.5, far: 200 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          onCreated={() => { setTimeout(() => setIsLoaded(true), 600); }}
          onPointerDown={() => { setIsDragging(true); setHasInteracted(true); setIsSnapping(false); }}
          onPointerUp={() => {
            setIsDragging(false);
            if (controlsRef.current) {
              const a = controlsRef.current.getAzimuthalAngle();
              if (Math.abs(a) > 2.2) setIsSnapping(true);
            }
          }}
        >
          <HospitalLighting />
          <color attach="background" args={["#EEF4FA"]} />
          <fog attach="fog" args={["#EEF4FA", 60, 120]} />
          <Suspense fallback={null}>
            <BuildingScene isDragging={isDragging} controlsRef={controlsRef} isSnapping={isSnapping} setIsSnapping={setIsSnapping} />
          </Suspense>
          <OrbitControls
            ref={controlsRef}
            target={[1.5, 8.5, 0]}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.9}
            maxPolarAngle={Math.PI / 1.9}
            dampingFactor={0.06}
            enableDamping
            rotateSpeed={0.75}
          />
        </Canvas>
      </div>

      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E94B1C]/20 shadow-sm text-xs font-semibold text-slate-800 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Interactive 3D Model</span>
      </div>

      {!hasInteracted && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-lg text-white text-xs font-medium tracking-wide animate-bounce">
            <Compass className="w-4 h-4 text-[#E94B1C]" />
            <span>Click &amp; Drag to rotate building</span>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
        <button onClick={snapToFront} title="Snap to Front" className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/95 hover:bg-white text-slate-800 hover:text-[#E94B1C] shadow-md border border-slate-200 text-xs font-semibold transition-all active:scale-95">
          <RotateCw className="w-3.5 h-3.5 text-[#E94B1C]" />
          <span>Front View</span>
        </button>
        <button onClick={resetView} title="Reset View" className="p-2.5 rounded-xl bg-white/95 hover:bg-white text-slate-700 hover:text-[#E94B1C] shadow-md border border-slate-200 transition-all active:scale-95">
          <RotateCw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default HospitalBuilding3D;
