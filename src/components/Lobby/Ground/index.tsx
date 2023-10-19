import { useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Ground() {
    const ground = useRef<THREE.Mesh | null>(null);

    const textures = useTexture({
        map: '/textures/ground/Ground_Forest_003_baseColor.jpg',
        roughnessMap: '/textures/ground/Ground_Forest_003_ROUGH.jpg',
        normalMap: '/textures/ground/Ground_Forest_003_normal.jpg',
        displacementMap: '/textures/ground/Ground_Forest_003_height.png',
        aoMap: '/textures/ground/Ground_Forest_003_ambientOcclusion.jpg',
    });

    useEffect(() => {
        Object.keys(textures).forEach((key) => {
            const texture = textures[key as keyof typeof textures];
            texture.repeat.set(8, 8);
            texture.wrapS = THREE.MirroredRepeatWrapping;
            texture.wrapT = THREE.MirroredRepeatWrapping;
            texture.needsUpdate = true;
        });

        if (!ground.current) return;
        ground.current.geometry.setAttribute(
            'uv2',
            new THREE.BufferAttribute(ground.current.geometry.attributes.uv.array, 2),
        );
    }, []);

    return (
        <group>
            <mesh ref={ground} rotation-x={-Math.PI / 2} position-y={0.05} position-z={-7} receiveShadow>
                <planeGeometry args={[20, 15, 1, 128]} />
                <meshStandardMaterial
                    map={textures.map}
                    roughnessMap={textures.roughnessMap}
                    roughnessMap-colorSpace={THREE.NoColorSpace}
                    normalMap={textures.normalMap}
                    normalMap-colorSpace={THREE.NoColorSpace}
                    normalScale={new THREE.Vector2(2, 2)}
                    displacementMap={textures.displacementMap}
                    displacementMap-colorSpace={THREE.NoColorSpace}
                    displacementScale={0.2}
                    displacementBias={-0.2}
                    aoMap={textures.aoMap}
                    opacity={0.75}
                    transparent
                />
            </mesh>
        </group>
    );
}
