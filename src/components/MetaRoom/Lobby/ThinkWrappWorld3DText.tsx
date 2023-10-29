import { useResponsive } from '@/hooks/useResponsive';
import { getDeviceConfig } from '@/utils/getDeviceConfig';
import { Text3D } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const ThinkWrappWorld3DText = () => {
    const device = useResponsive();

    const motionGroupConfig = {
        mobile: {
            position: [-3.46, 1.05, 6],
            scale: 0.25,
            rotationY: 0,
        },
        tablet: {
            position: [0.45, 0, 0.5],
            scale: 0.8,
            rotationY: Math.PI * 1.95,
        },
        desktop: {
            position: [0, 0, 0.5],
            scale: 1,
            rotationY: 0,
        },
    };

    const thinkWrappConfig = {
        mobile: {
            positionX: -2.1,
            scale: 0.18,
            rotationY: Math.PI * 1.86,
        },
        desktop: {
            positionX: -4,
            scale: 0.3,
            rotationY: Math.PI / 12,
        },
    };

    const worldConfig = {
        mobile: {
            positionX: -1.9,
            scale: 0.18,
            rotationY: Math.PI * 1.86,
        },
        desktop: {
            positionX: -3,
            scale: 0.25,
            rotationY: Math.PI / 12,
        },
    };

    const motionDeviceResponsive = getDeviceConfig(device, motionGroupConfig);
    const thinkWrappResponsive = getDeviceConfig(device, thinkWrappConfig);
    const worldResponsive = getDeviceConfig(device, worldConfig);

    return (
        <motion.group
            position={motionDeviceResponsive.position}
            scale={motionDeviceResponsive.scale}
            rotation-y={motionDeviceResponsive.rotationY}
        >
            <Text3D
                font={'fonts/Inter_Bold.json'}
                position-z={2}
                position-y={0.2}
                size={thinkWrappResponsive.scale}
                position-x={thinkWrappResponsive.positionX}
                rotation-y={thinkWrappResponsive.rotationY}
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
                size={worldResponsive.scale}
                position-x={worldResponsive.positionX}
                rotation-y={worldResponsive.rotationY}
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
        </motion.group>
    );
};

export default ThinkWrappWorld3DText;
