import { Float, Html } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useSelector } from 'react-redux';
import { Monitor } from '@/components/3DModels/Monitor';
import MonitorContent from './MonitorContent';
import { RootState } from '@/redux/reducers';
import { useNavigate } from 'react-router-dom';

type MonitorRoomProps = {
    isMobile: boolean;
    goldenRatio: number;
};

export default function MonitorRoom({ isMobile, goldenRatio }: MonitorRoomProps) {
    const monitorState = useSelector((state: RootState) => state.interface.monitorState);
    const navigate = useNavigate();

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // ugly transform position 에 버그가 있어 사파리 수정
    const scale = isMobile ? 0.18 : 0.22;
    const posX = isMobile ? 0 : -0.25 * goldenRatio;
    const posY = isMobile ? 1.65 : 1.5;
    const posZ = 0.5;
    const rotationY = isSafari ? 0 : isMobile ? 0 : Math.PI / 8;
    const roomRotationY = isSafari ? 0 : isMobile ? 0 : Math.PI * 1.92;
    const roomPositionX = isMobile ? 0 : -0.1;

    return (
        <group scale={scale} position={[posX, posY, posZ]} rotation-y={rotationY}>
            <Float speed={5} rotationIntensity={0} floatIntensity={1} floatingRange={[0, 0.05]}>
                <Monitor position={[0, -0.85, -0.3]} scale={0.52} rotation={[0, Math.PI / -1.98, 0]} />
            </Float>
            <motion.group
                initial={{
                    scale: monitorState ? 1 : 0,
                }}
                animate={{
                    scale: monitorState ? 1 : 0,
                }}
                transition={{
                    duration: 0.35,
                    delay: monitorState ? 0.85 : 0,
                    ease: 'backInOut',
                }}
            >
                <Html
                    position={[roomPositionX, 0.2, 0.11]}
                    transform={!isSafari}
                    center
                    scale={0.121}
                    rotation-y={roomRotationY}
                >
                    <MonitorContent isSafari={isSafari} navigate={navigate} />
                </Html>
            </motion.group>
        </group>
    );
}
