import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleField(props) {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00d4ff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function FloatingData() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={[2, 1, -2]}>
                <mesh>
                    <boxGeometry args={[0.05, 0.05, 0.05]} />
                    <meshBasicMaterial color="#7000ff" wireframe opacity={0.3} transparent />
                </mesh>
            </group>
        </Float>
    );
}

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#030014]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
                <ParticleField />
            </Canvas>
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030014_90%)]" />
        </div>
    );
};

export default AnimatedBackground;
