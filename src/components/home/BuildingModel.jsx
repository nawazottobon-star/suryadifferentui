import React, { useMemo } from "react";
import * as THREE from "three";

function Box({ position, args, material, castShadow, receiveShadow, rotation }) {
  return (
    <mesh position={position} rotation={rotation} castShadow={castShadow} receiveShadow={receiveShadow} material={material}>
      <boxGeometry args={args} />
    </mesh>
  );
}

function LouvredWindow({ position, width = 1.0, height = 1.3, depth = 0.05, mats }) {
  const slats = 5;
  const slatH = (height - 0.08) / slats;
  return (
    <group position={position}>
      <Box args={[width, height, depth + 0.04]} material={mats.frame} />
      {Array.from({ length: slats }).map((_, i) => {
        const y = -height / 2 + 0.04 + slatH * i + slatH / 2;
        return <Box key={i} args={[width - 0.08, slatH - 0.04, depth + 0.08]} position={[0, y, 0.01]} material={mats.louvre} />;
      })}
    </group>
  );
}

function Balcony({ position, width, depth, mats }) {
  const postSpacing = 0.7;
  const numPosts = Math.round(width / postSpacing) + 1;
  return (
    <group position={position}>
      <Box args={[width, 0.12, depth]} position={[0, 0, 0]} material={mats.wall} castShadow />
      <Box args={[width, 0.06, 0.06]} position={[0, 0.92, depth / 2 - 0.03]} material={mats.railMetal} />
      {Array.from({ length: numPosts }).map((_, i) => (
        <Box key={i} args={[0.05, 0.88, 0.05]} position={[-width / 2 + i * postSpacing, 0.5, depth / 2 - 0.03]} material={mats.railMetal} />
      ))}
      <Box args={[width - 0.06, 0.72, 0.02]} position={[0, 0.42, depth / 2 - 0.04]} material={mats.glass} />
    </group>
  );
}

function Staircase({ position, width, steps, riseH, runD, mats }) {
  return (
    <group position={position}>
      {Array.from({ length: steps }).map((_, i) => (
        <Box key={i}
          args={[width, riseH * (i + 1), runD]}
          position={[0, (riseH * (i + 1)) / 2 - riseH * steps / 2, runD * (steps - 1 - i) - runD * (steps - 1) / 2]}
          material={mats.pavement} receiveShadow />
      ))}
      <Box args={[0.05, 0.85, steps * runD]} position={[-width / 2 - 0.04, 0.3, 0]} material={mats.railMetal} />
      <Box args={[0.05, 0.85, steps * runD]} position={[width / 2 + 0.04, 0.3, 0]} material={mats.railMetal} />
      <Box args={[0.05, 0.05, steps * runD]} position={[-width / 2 - 0.04, 0.72, 0]} material={mats.railMetal} />
      <Box args={[0.05, 0.05, steps * runD]} position={[width / 2 + 0.04, 0.72, 0]} material={mats.railMetal} />
    </group>
  );
}

function useMaterials() {
  return useMemo(() => {
    const bumpCanvas = document.createElement("canvas");
    bumpCanvas.width = 128; bumpCanvas.height = 128;
    const bCtx = bumpCanvas.getContext("2d");
    bCtx.fillStyle = "#808080"; bCtx.fillRect(0, 0, 128, 128);
    const bd = bCtx.getImageData(0, 0, 128, 128);
    for (let i = 0; i < bd.data.length; i += 4) {
      const n = (Math.random() - 0.5) * 20;
      const v = Math.min(255, Math.max(0, 128 + n));
      bd.data[i] = bd.data[i + 1] = bd.data[i + 2] = v;
    }
    bCtx.putImageData(bd, 0, 0);
    const bumpTex = new THREE.CanvasTexture(bumpCanvas);
    bumpTex.wrapS = bumpTex.wrapT = THREE.RepeatWrapping;
    bumpTex.repeat.set(4, 4);

    const wall = new THREE.MeshStandardMaterial({ color: 0xF2EDE0, roughness: 0.80, metalness: 0.02, bumpMap: bumpTex, bumpScale: 0.03 });

    const tileCanvas = document.createElement("canvas");
    tileCanvas.width = 512; tileCanvas.height = 512;
    const tCtx = tileCanvas.getContext("2d");
    tCtx.fillStyle = "#525A60"; tCtx.fillRect(0, 0, 512, 512);
    tCtx.strokeStyle = "#3E4448"; tCtx.lineWidth = 3;
    for (let x = 0; x <= 512; x += 102) { tCtx.beginPath(); tCtx.moveTo(x, 0); tCtx.lineTo(x, 512); tCtx.stroke(); }
    for (let y = 0; y <= 512; y += 102) { tCtx.beginPath(); tCtx.moveTo(0, y); tCtx.lineTo(512, y); tCtx.stroke(); }
    const tileTex = new THREE.CanvasTexture(tileCanvas);
    tileTex.wrapS = tileTex.wrapT = THREE.RepeatWrapping;
    tileTex.repeat.set(3, 3);
    const darkTile = new THREE.MeshStandardMaterial({ map: tileTex, roughness: 0.45, metalness: 0.18 });

    const darkBay = new THREE.MeshStandardMaterial({ color: 0x464D52, roughness: 0.50, metalness: 0.15 });
    const louvre = new THREE.MeshStandardMaterial({ color: 0xE8E8E4, roughness: 0.65, metalness: 0.08 });
    const frame = new THREE.MeshStandardMaterial({ color: 0x2E3338, roughness: 0.40, metalness: 0.55 });
    const glass = new THREE.MeshPhysicalMaterial({ color: 0x8BB4C8, roughness: 0.06, metalness: 0.1, transmission: 0.55, transparent: true, opacity: 0.72, ior: 1.45 });
    const interior = new THREE.MeshBasicMaterial({ color: 0xFFEEC8 });
    const railMetal = new THREE.MeshStandardMaterial({ color: 0x4A4E52, roughness: 0.35, metalness: 0.80 });
    const wood = new THREE.MeshStandardMaterial({ color: 0x8B6035, roughness: 0.68, metalness: 0.04 });
    const stone = new THREE.MeshStandardMaterial({ color: 0xD8CDBA, roughness: 0.78, metalness: 0.04 });
    const pavement = new THREE.MeshStandardMaterial({ color: 0xC5BEB4, roughness: 0.85, metalness: 0.03 });

    function makeSign(w, h, drawFn) {
      const c = document.createElement("canvas"); c.width = w; c.height = h;
      const ctx = c.getContext("2d"); drawFn(ctx, w, h);
      const t = new THREE.CanvasTexture(c); t.anisotropy = 8; return t;
    }

    const signTex = makeSign(1024, 384, (ctx, w, h) => {
      ctx.fillStyle = "#FFF"; ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "#DDD"; ctx.lineWidth = 4; ctx.strokeRect(4, 4, w-8, h-8);
      ctx.fillStyle = "#E94B1C"; ctx.beginPath(); ctx.arc(110, 192, 78, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#FFF"; ctx.beginPath(); ctx.arc(110, 192, 50, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#E94B1C"; ctx.lineWidth = 10;
      for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4 - Math.PI / 2; ctx.beginPath(); ctx.moveTo(110 + Math.cos(a) * 84, 192 + Math.sin(a) * 84); ctx.lineTo(110 + Math.cos(a) * 116, 192 + Math.sin(a) * 116); ctx.stroke(); }
      ctx.font = "bold 108px Arial"; ctx.fillStyle = "#E94B1C"; ctx.fillText("SURYA", 230, 155);
      ctx.font = "bold 72px Arial"; ctx.fillText("HOSPITAL", 230, 255);
    });
    const signBoard = new THREE.MeshBasicMaterial({ map: signTex });

    const fsTex = makeSign(1024, 256, (ctx) => {
      ctx.clearRect(0, 0, 1024, 256);
      ctx.fillStyle = "#C8A654"; ctx.beginPath(); ctx.arc(90, 128, 52, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#525A60"; ctx.beginPath(); ctx.arc(90, 128, 32, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#C8A654"; ctx.lineWidth = 7;
      for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4 - Math.PI / 2; ctx.beginPath(); ctx.moveTo(90 + Math.cos(a) * 57, 128 + Math.sin(a) * 57); ctx.lineTo(90 + Math.cos(a) * 78, 128 + Math.sin(a) * 78); ctx.stroke(); }
      ctx.font = "bold 72px Arial"; ctx.fillStyle = "#C8A654"; ctx.fillText("SURYA HOSPITAL", 168, 148);
    });
    const facadeSign = new THREE.MeshBasicMaterial({ map: fsTex, transparent: true });

    const saiTex = makeSign(768, 192, (ctx) => {
      ctx.fillStyle = "#FFF"; ctx.fillRect(0, 0, 768, 192);
      ctx.fillStyle = "#9C27B0"; ctx.beginPath(); ctx.arc(80, 96, 52, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#FFF"; ctx.font = "bold 56px Arial"; ctx.fillText("S", 60, 116);
      ctx.fillStyle = "#9C27B0"; ctx.font = "bold 52px Arial"; ctx.fillText("SAI DIAGNOSTICS", 152, 88);
      ctx.fillStyle = "#555"; ctx.font = "26px Arial"; ctx.fillText("MULTI SPECIALITY CENTRE", 152, 136);
    });
    const saiSign = new THREE.MeshBasicMaterial({ map: saiTex });

    const esTex = makeSign(512, 128, (ctx) => {
      ctx.fillStyle = "#FFF"; ctx.fillRect(0, 0, 512, 128);
      ctx.fillStyle = "#E94B1C"; ctx.beginPath(); ctx.arc(55, 64, 36, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#FFF"; ctx.beginPath(); ctx.arc(55, 64, 22, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#E94B1C"; ctx.lineWidth = 5;
      for (let i = 0; i < 8; i++) { const a = (i * Math.PI) / 4 - Math.PI / 2; ctx.beginPath(); ctx.moveTo(55 + Math.cos(a) * 40, 64 + Math.sin(a) * 40); ctx.lineTo(55 + Math.cos(a) * 56, 64 + Math.sin(a) * 56); ctx.stroke(); }
      ctx.fillStyle = "#E94B1C"; ctx.font = "bold 50px Arial"; ctx.fillText("SURYA HOSPITAL", 108, 82);
    });
    const entrySign = new THREE.MeshBasicMaterial({ map: esTex });

    const emTex = makeSign(384, 128, (ctx) => {
      ctx.fillStyle = "#CC1100"; ctx.fillRect(0, 0, 384, 128);
      ctx.fillStyle = "#FFF"; ctx.font = "bold 64px Arial"; ctx.textAlign = "center"; ctx.fillText("EMERGENCY", 192, 86);
    });
    const emergSign = new THREE.MeshBasicMaterial({ map: emTex });

    return { wall, darkTile, darkBay, louvre, frame, glass, interior, railMetal, wood, stone, pavement, signBoard, facadeSign, saiSign, entrySign, emergSign };
  }, []);
}

export function BuildingModel() {
  const mats = useMaterials();

  const Z_FRONT = 6.0;
  const Z_BACK = -6.0;
  const X_LEFT = -6.5;
  const X_MID = 3.5;
  const X_RIGHT = 9.5;
  const Y_PLINTH = 1.0;
  const GF_TOP = 4.0;
  const F1_TOP = 7.2;
  const F2_TOP = 10.4;
  const F3_TOP = 13.6;
  const PENTH_TOP = 17.5;
  const WING_TOP = 11.8;
  const MAIN_W = X_MID - X_LEFT;
  const WING_W = X_RIGHT - X_MID;
  const TOTAL_W = X_RIGHT - X_LEFT;
  const DEPTH = Z_FRONT - Z_BACK;
  const MAIN_CX = (X_LEFT + X_MID) / 2;
  const WING_CX = (X_MID + X_RIGHT) / 2;

  return (
    <group>
      {/* Ground */}
      <Box args={[44, 0.1, 44]} position={[1.5, -0.05, 0]} material={mats.pavement} receiveShadow />
      <Box args={[44, 0.08, 0.4]} position={[1.5, 0.04, Z_FRONT + 4.5]} material={mats.frame} />

      {/* Plinth base */}
      <Box args={[TOTAL_W, Y_PLINTH, DEPTH]} position={[(X_LEFT + X_RIGHT) / 2, Y_PLINTH / 2, 0]} material={mats.stone} receiveShadow />

      {/* Main left block */}
      <Box args={[MAIN_W, F3_TOP - Y_PLINTH, DEPTH]} position={[MAIN_CX, Y_PLINTH + (F3_TOP - Y_PLINTH) / 2, 0]} material={mats.wall} castShadow receiveShadow />

      {/* Right wing block */}
      <Box args={[WING_W, WING_TOP - Y_PLINTH, DEPTH]} position={[WING_CX, Y_PLINTH + (WING_TOP - Y_PLINTH) / 2, 0]} material={mats.wall} castShadow receiveShadow />

      {/* Penthouse — rear wall */}
      <Box args={[MAIN_W, PENTH_TOP - F3_TOP, DEPTH * 0.45]} position={[MAIN_CX, F3_TOP + (PENTH_TOP - F3_TOP) / 2, Z_BACK + DEPTH * 0.45 / 2]} material={mats.wall} castShadow receiveShadow />
      {/* Left tower column */}
      <Box args={[2.0, PENTH_TOP - F3_TOP, DEPTH]} position={[X_LEFT + 1.0, F3_TOP + (PENTH_TOP - F3_TOP) / 2, 0]} material={mats.wall} castShadow receiveShadow />
      {/* Penthouse right mass */}
      <Box args={[MAIN_W - 2.2, PENTH_TOP - F3_TOP, DEPTH * 0.5]} position={[MAIN_CX + 0.0, F3_TOP + (PENTH_TOP - F3_TOP) / 2, Z_BACK + DEPTH * 0.25]} material={mats.wall} castShadow receiveShadow />

      {/* Canopy slab over terrace */}
      <Box args={[6.2, 0.3, 4.8]} position={[MAIN_CX + 0.5, PENTH_TOP - 0.15, Z_FRONT - 2.4]} material={mats.wall} castShadow />
      <Box args={[6.0, 0.08, 4.6]} position={[MAIN_CX + 0.5, PENTH_TOP - 0.42, Z_FRONT - 2.4]} material={mats.wood} />

      {/* Oculus cylinder rim */}
      <mesh position={[MAIN_CX - 0.2, PENTH_TOP - 0.1, Z_FRONT - 2.0]} castShadow>
        <cylinderGeometry args={[1.1, 1.1, 0.35, 32, 1, true]} />
        <primitive object={mats.wall} attach="material" />
      </mesh>
      <mesh position={[MAIN_CX - 0.2, PENTH_TOP - 0.27, Z_FRONT - 2.0]}>
        <cylinderGeometry args={[1.08, 1.08, 0.04, 32]} />
        <primitive object={mats.wood} attach="material" />
      </mesh>

      {/* Terrace wood soffit */}
      <Box args={[MAIN_W - 2.2, 0.1, 2.4]} position={[MAIN_CX - 0.3, F3_TOP - 0.05, Z_FRONT - 1.2]} material={mats.wood} />

      {/* Penthouse balconies */}
      <Balcony position={[X_LEFT + 2.5, F3_TOP + 0.06, Z_FRONT - 0.6]} width={3.2} depth={1.8} mats={mats} />
      <Balcony position={[MAIN_CX - 0.3, F3_TOP + 0.06, Z_FRONT - 0.6]} width={2.8} depth={1.8} mats={mats} />

      {/* Balcony doors */}
      <Box args={[2.2, 2.2, 0.12]} position={[X_LEFT + 2.5, F3_TOP + 1.3, Z_FRONT - 1.1]} material={mats.frame} />
      <Box args={[2.0, 2.0, 0.08]} position={[X_LEFT + 2.5, F3_TOP + 1.3, Z_FRONT - 1.06]} material={mats.glass} />
      <Box args={[1.2, 2.2, 0.12]} position={[MAIN_CX - 1.6, F3_TOP + 1.3, Z_FRONT - 1.1]} material={mats.frame} />
      <Box args={[1.0, 2.0, 0.08]} position={[MAIN_CX - 1.6, F3_TOP + 1.3, Z_FRONT - 1.06]} material={mats.glass} />
      <Box args={[1.2, 2.2, 0.12]} position={[MAIN_CX + 0.2, F3_TOP + 1.3, Z_FRONT - 1.1]} material={mats.frame} />
      <Box args={[1.0, 2.0, 0.08]} position={[MAIN_CX + 0.2, F3_TOP + 1.3, Z_FRONT - 1.06]} material={mats.glass} />

      {/* Rooftop signboard */}
      <Box args={[4.6, 1.8, 0.2]} position={[MAIN_CX - 1.2, PENTH_TOP + 0.9, Z_FRONT - 0.1]} material={mats.wall} castShadow />
      <mesh position={[MAIN_CX - 1.2, PENTH_TOP + 0.9, Z_FRONT + 0.02]}>
        <planeGeometry args={[4.4, 1.65]} />
        <primitive object={mats.signBoard} attach="material" />
      </mesh>
      <Box args={[0.08, 0.6, 0.5]} position={[MAIN_CX - 3.2, PENTH_TOP + 0.2, Z_FRONT - 0.25]} material={mats.frame} />
      <Box args={[0.08, 0.6, 0.5]} position={[MAIN_CX + 0.8, PENTH_TOP + 0.2, Z_FRONT - 0.25]} material={mats.frame} />

      {/* 4 dark bay strips (left zone, floors 1-3) */}
      {[-5.2, -3.6, -2.0, -0.4].map((bx, bi) => {
        const floors = [
          GF_TOP + (F1_TOP - GF_TOP) / 2,
          F1_TOP + (F2_TOP - F1_TOP) / 2,
          F2_TOP + (F3_TOP - F2_TOP) / 2,
        ];
        return (
          <group key={bi}>
            <Box args={[1.08, F3_TOP - GF_TOP, 0.34]} position={[bx, GF_TOP + (F3_TOP - GF_TOP) / 2, Z_FRONT + 0.17]} material={mats.darkBay} castShadow receiveShadow />
            {floors.map((wy, wi) => (
              <LouvredWindow key={wi} position={[bx, wy, Z_FRONT + 0.36]} width={0.82} height={1.28} depth={0.04} mats={mats} />
            ))}
            {[GF_TOP + 3.0, GF_TOP + 6.2].map((yd, di) => (
              <Box key={di} args={[0.22, 0.22, 0.06]} position={[bx, yd, Z_FRONT + 0.36]} material={mats.frame} />
            ))}
          </group>
        );
      })}

      {/* ACP tile block — right of bays (main facade) */}
      <Box args={[WING_W - 0.5, F3_TOP - GF_TOP, 0.38]} position={[X_MID + 2.25, GF_TOP + (F3_TOP - GF_TOP) / 2, Z_FRONT + 0.19]} material={mats.darkTile} castShadow receiveShadow />
      {/* ACP on right wing front */}
      <Box args={[WING_W + 0.3, WING_TOP - GF_TOP, 0.28]} position={[WING_CX, GF_TOP + (WING_TOP - GF_TOP) / 2, Z_FRONT + 0.14]} material={mats.darkTile} castShadow receiveShadow />

      {/* SURYA HOSPITAL gold sign on ACP */}
      <mesh position={[WING_CX - 0.3, GF_TOP + (F2_TOP - GF_TOP) / 2 + 0.5, Z_FRONT + 0.42]}>
        <planeGeometry args={[5.2, 0.95]} />
        <primitive object={mats.facadeSign} attach="material" />
      </mesh>

      {/* Windows above ACP zone */}
      {[X_MID + 0.9, X_MID + 2.3, X_MID + 3.7].map((wx, wi) => (
        <LouvredWindow key={wi} position={[wx, F2_TOP + 1.1, Z_FRONT + 0.46]} width={1.0} height={0.8} depth={0.04} mats={mats} />
      ))}
      {/* Windows below ACP zone (F1) */}
      {[X_MID + 0.9, X_MID + 2.3, X_MID + 3.7].map((wx, wi) => (
        <LouvredWindow key={wi} position={[wx, GF_TOP + 1.05, Z_FRONT + 0.36]} width={1.0} height={0.82} depth={0.04} mats={mats} />
      ))}

      {/* Right wing top windows */}
      {[WING_CX - 1.4, WING_CX + 0.1].map((wx, wi) => (
        <group key={wi}>
          <Box args={[1.6, 1.4, 0.12]} position={[wx, WING_TOP - 0.9, Z_FRONT + 0.06]} material={mats.frame} castShadow />
          <Box args={[1.4, 1.2, 0.06]} position={[wx, WING_TOP - 0.9, Z_FRONT + 0.14]} material={mats.louvre} />
        </group>
      ))}

      {/* Canopy belt course */}
      <Box args={[TOTAL_W + 0.6, 0.40, 1.4]} position={[(X_LEFT + X_RIGHT) / 2, GF_TOP + 0.2, Z_FRONT + 0.72]} material={mats.wall} castShadow />
      <Box args={[TOTAL_W + 0.4, 0.07, 1.2]} position={[(X_LEFT + X_RIGHT) / 2, GF_TOP + 0.02, Z_FRONT + 0.68]} material={mats.wood} />

      {/* GF stone cladding front face */}
      <Box args={[TOTAL_W, GF_TOP - Y_PLINTH, 0.14]} position={[(X_LEFT + X_RIGHT) / 2, Y_PLINTH + (GF_TOP - Y_PLINTH) / 2, Z_FRONT + 0.07]} material={mats.stone} castShadow />

      {/* Entry glass storefront */}
      <Box args={[5.4, GF_TOP - Y_PLINTH - 0.2, 0.1]} position={[MAIN_CX - 0.8, Y_PLINTH + (GF_TOP - Y_PLINTH) / 2, Z_FRONT + 0.15]} material={mats.glass} />
      <Box args={[5.2, GF_TOP - Y_PLINTH - 0.3, 0.05]} position={[MAIN_CX - 0.8, Y_PLINTH + (GF_TOP - Y_PLINTH) / 2, Z_FRONT + 0.09]} material={mats.interior} />
      {[-2.4, -1.2, 0.0, 1.2, 2.4].map((mx, mi) => (
        <Box key={mi} args={[0.06, GF_TOP - Y_PLINTH - 0.1, 0.12]} position={[MAIN_CX - 0.8 + mx, Y_PLINTH + (GF_TOP - Y_PLINTH) / 2, Z_FRONT + 0.19]} material={mats.frame} />
      ))}

      {/* Right GF shuttered grille */}
      <Box args={[WING_W - 0.4, GF_TOP - Y_PLINTH - 0.5, 0.1]} position={[WING_CX, Y_PLINTH + (GF_TOP - Y_PLINTH) / 2, Z_FRONT + 0.15]} material={mats.louvre} />
      {Array.from({ length: 8 }).map((_, i) => (
        <Box key={i} args={[WING_W - 0.6, 0.06, 0.08]} position={[WING_CX, Y_PLINTH + 0.4 + i * 0.36, Z_FRONT + 0.18]} material={mats.frame} />
      ))}

      {/* Fascia sign — SAI DIAGNOSTICS */}
      <Box args={[3.9, 0.44, 0.12]} position={[MAIN_CX - 2.8, GF_TOP + 0.60, Z_FRONT + 0.76]} material={mats.wall} />
      <mesh position={[MAIN_CX - 2.8, GF_TOP + 0.60, Z_FRONT + 0.84]}>
        <planeGeometry args={[3.7, 0.38]} />
        <primitive object={mats.saiSign} attach="material" />
      </mesh>

      {/* Fascia sign — EMERGENCY */}
      <Box args={[2.2, 0.40, 0.12]} position={[MAIN_CX + 0.1, GF_TOP + 0.60, Z_FRONT + 0.76]} material={mats.frame} />
      <mesh position={[MAIN_CX + 0.1, GF_TOP + 0.60, Z_FRONT + 0.84]}>
        <planeGeometry args={[2.0, 0.34]} />
        <primitive object={mats.emergSign} attach="material" />
      </mesh>

      {/* Fascia sign — SURYA HOSPITAL (entry) */}
      <Box args={[3.2, 0.44, 0.12]} position={[WING_CX - 0.6, GF_TOP + 0.60, Z_FRONT + 0.76]} material={mats.wall} />
      <mesh position={[WING_CX - 0.6, GF_TOP + 0.60, Z_FRONT + 0.84]}>
        <planeGeometry args={[3.0, 0.38]} />
        <primitive object={mats.entrySign} attach="material" />
      </mesh>

      {/* Side emergency sign */}
      <Box args={[0.1, 0.40, 2.0]} position={[X_RIGHT + 0.05, Y_PLINTH + 2.4, Z_FRONT - 1.0]} material={mats.frame} />
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[X_RIGHT + 0.12, Y_PLINTH + 2.4, Z_FRONT - 1.0]}>
        <planeGeometry args={[1.8, 0.38]} />
        <primitive object={mats.emergSign} attach="material" />
      </mesh>

      {/* Veranda walkway */}
      <Box args={[MAIN_W + 1.2, 0.15, 2.0]} position={[MAIN_CX - 0.4, Y_PLINTH + 0.075, Z_FRONT + 1.1]} material={mats.stone} receiveShadow />
      <Box args={[MAIN_W + 1.4, 0.06, 0.06]} position={[MAIN_CX - 0.4, Y_PLINTH + 0.95, Z_FRONT + 2.0]} material={mats.railMetal} />
      {Array.from({ length: 12 }).map((_, i) => (
        <Box key={i} args={[0.05, 0.9, 0.05]} position={[X_LEFT + i * 1.05 + 0.5, Y_PLINTH + 0.52, Z_FRONT + 2.0]} material={mats.railMetal} />
      ))}

      {/* Staircase */}
      <Staircase position={[MAIN_CX, 0.0, Z_FRONT + 3.1]} width={3.5} steps={5} riseH={0.2} runD={0.34} mats={mats} />

      {/* Ramp */}
      <mesh position={[X_LEFT + 2.0, Y_PLINTH / 2 - 0.02, Z_FRONT + 2.3]} rotation={[Math.atan2(Y_PLINTH, 2.2), 0, 0]}>
        <boxGeometry args={[2.0, 0.1, Math.sqrt(Y_PLINTH * Y_PLINTH + 4.84)]} />
        <primitive object={mats.pavement} attach="material" />
      </mesh>

      {/* Right side ACP wrap */}
      <Box args={[0.3, WING_TOP - Y_PLINTH, DEPTH * 0.55]} position={[X_RIGHT + 0.15, Y_PLINTH + (WING_TOP - Y_PLINTH) / 2, Z_FRONT - DEPTH * 0.275]} material={mats.darkTile} castShadow />
      {[GF_TOP + 1.7, F1_TOP + 1.6].map((wy, wi) => (
        <group key={wi}>
          <Box args={[0.1, 1.1, 2.4]} position={[X_RIGHT + 0.05, wy, Z_FRONT - 2.8]} material={mats.frame} />
          <Box args={[0.06, 0.9, 2.2]} position={[X_RIGHT + 0.08, wy, Z_FRONT - 2.8]} material={mats.glass} />
        </group>
      ))}

      {/* Left side minimal windows */}
      {[GF_TOP + 1.6, F1_TOP + 1.6, F2_TOP + 1.4].map((wy, wi) => (
        <Box key={wi} args={[0.1, 0.9, 1.4]} position={[X_LEFT - 0.05, wy, -0.5 + wi * 2.0]} material={mats.frame} />
      ))}

      {/* Compound boundary wall */}
      <Box args={[0.2, 1.8, 9.0]} position={[X_RIGHT + 1.5, 0.9, Z_FRONT - 6.5]} material={mats.stone} receiveShadow />
      <Box args={[0.3, 2.2, 0.3]} position={[X_RIGHT + 1.5, 1.1, Z_FRONT - 1.5]} material={mats.stone} />
    </group>
  );
}
