import { Text3D } from '@react-three/drei';

export default function ThinkWrappWorld3DText() {
    return (
        <group>
            <Text3D
                font={'fonts/Inter_Bold.json'}
                position-z={2}
                position-y={0.2}
                size={0.3}
                position-x={-4}
                rotation-y={Math.PI / 12}
                bevelEnabled
                bevelThickness={0.005}
                letterSpacing={0.012}
                castShadow
                receiveShadow
            >
                ThinkWrapp
                <meshStandardMaterial
                    color="#ffd700"
                    roughness={0.5}
                    metalness={1}
                    emissiveIntensity={0.075}
                    emissive="#ffde22"
                    toneMapped={false}
                />
            </Text3D>
            <Text3D
                font={'fonts/Inter_Bold.json'}
                position-z={2.5}
                size={0.25}
                position-x={-3}
                rotation-y={Math.PI / 12}
                bevelEnabled
                bevelThickness={0.005}
                letterSpacing={0.012}
                castShadow
                receiveShadow
            >
                World
                <meshStandardMaterial
                    color="#ffd700"
                    roughness={0.5}
                    metalness={1}
                    emissiveIntensity={0.075}
                    emissive="#ffde22"
                    toneMapped={false}
                />
            </Text3D>
        </group>
    );
}
