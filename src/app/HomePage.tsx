"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        if (!canvasRef.current) return;
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new THREE.IcosahedronGeometry(2, 1);
        const material = new THREE.MeshStandardMaterial({
            color: 0x0077ff,
            wireframe: true,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.005;
            mesh.rotation.y += 0.005;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Bennett Pompi
                </h1>
                <p className="text-lg md:text-2xl mb-6">
                    Software Engineer | Full-Stack | Product-Focused
                </p>
                <div className="flex gap-4">
                    <Button asChild>
                        <a
                            href="/Bennett_Pompi_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Resume
                        </a>
                    </Button>
                    <Button asChild>
                        <a
                            href="https://linkedin.com/in/bpompi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
