import { useEffect, useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import useJoined from '@/hooks/useJoined';

export default function RoomGround() {
    const map = useJoined((state) => state.joined?.map);
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
            texture.repeat.set(5, 5);
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
        <>
            <mesh
                rotation-x={-Math.PI / 2}
                position-y={-0.002}
                position-x={(map?.size as number[])[0] / 2}
                position-z={(map?.size as number[])[1] / 2}
                receiveShadow
            >
                <planeGeometry args={[7, 7]} />
                <meshStandardMaterial color="#f0f0f0" />
            </mesh>
            <mesh
                ref={ground}
                rotation-x={-Math.PI / 2}
                position-y={-0.003}
                position-x={(map?.size as number[])[0] / 2}
                position-z={(map?.size as number[])[1] / 2}
            >
                <planeGeometry args={[20, 20, 1, 256]} />
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
                />
            </mesh>
        </>
    );
}
