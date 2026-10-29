import { useEffect, useRef } from "react";
import * as THREE from "three";

// Ink field: white points on a difference blend — black motes on white
// ground, white motes on the inverse page. Scatters when the menu opens.
export default function ThreeField() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
    camera.position.z = 52;

    const N = 600;
    const base = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 14 + Math.random() * 20;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      base[i * 3] = r * Math.sin(p) * Math.cos(t);
      base[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      base[i * 3 + 2] = r * Math.cos(p);
    }
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(base);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.55,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
    });
    const group = new THREE.Points(geo, mat);
    scene.add(group);

    let spread = 0; // 0 = calm, 1 = scattered (menu open)
    let targetSpread = 0;
    const onMenu = (e) => {
      targetSpread = e.detail ? 1 : 0;
    };
    window.addEventListener("mammu:menu", onMenu);

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const t0 = performance.now();
    const tick = () => {
      const t = (performance.now() - t0) / 1000;
      spread += (targetSpread - spread) * 0.06;
      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;

      const arr = geo.attributes.position.array;
      for (let i = 0; i < N; i++) {
        const drift = Math.sin(t * 0.6 + i) * 0.35;
        const s = 1 + spread * 1.1 + drift * 0.06;
        arr[i * 3] = base[i * 3] * s + drift;
        arr[i * 3 + 1] = base[i * 3 + 1] * s + Math.cos(t * 0.5 + i) * 0.3;
        arr[i * 3 + 2] = base[i * 3 + 2] * s;
      }
      geo.attributes.position.needsUpdate = true;

      group.rotation.y = t * 0.05 + pointer.x * 0.25;
      group.rotation.x = pointer.y * 0.18;
      group.position.y = Math.sin(t * 0.3) * 1.2;

      renderer.render(scene, camera);
      if (!reduced) raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mammu:menu", onMenu);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full pointer-events-none"
      style={{ mixBlendMode: "difference", zIndex: -1 }}
    />
  );
}
