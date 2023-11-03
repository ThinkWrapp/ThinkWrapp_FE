import { Float, Html } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/redux/reducers';
import { openModal } from '@/redux/actions/modalAction';
import { Monitor as LobbyMonitor } from '@/components/3DModels/Monitor';
import { useResponsive } from '@/hooks/useResponsive';
import { getDeviceConfig } from '@/utils/getDeviceConfig';
import Content from './Content';
import { socketJoinRoom } from '@/redux/actions/socketAciton';
import { ROUTE_ROOM } from '@/constants/route';
import { saveRoom } from '@/redux/actions/roomPersistAction';
import { Room } from '@/types/room';

const Monitor = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    const monitorState = useSelector((state: RootState) => state.interface.monitorState);
    const rooms = useSelector((state: RootState) => state.socket.rooms);
    const avatarUrl = useSelector((state: RootState) => state.avatar.avatarUrl);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const goldenRatio = Math.min(1, window.innerWidth / 1600);
    const device = useResponsive();
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // ugly transform position 에 버그가 있어 사파리 수정

    const monitorGroupConfig = {
        mobile: {
            scale: 0.18,
            position: [0, 1.65, 0.5],
            rotationY: isSafari ? 0 : 0,
        },
        desktop: {
            scale: 0.22,
            position: [-0.25 * goldenRatio, 1.5, 0.5],
            rotationY: isSafari ? 0 : Math.PI / 8,
        },
    };

    const roomConfig = {
        mobile: {
            rotationY: isSafari ? 0 : 0,
            positionX: 0,
        },
        desktop: {
            rotationY: isSafari ? 0 : Math.PI * 1.92,
            positionX: isSafari ? 0 : -0.1,
        },
    };

    const monitorResponsive = getDeviceConfig(device, monitorGroupConfig);
    const roomResponsive = getDeviceConfig(device, roomConfig);

    const openCreateRoomModal = (modalKeyword: string) => {
        dispatch(openModal(modalKeyword));
    };

    const joinRoom = (roomId: string) => {
        dispatch(socketJoinRoom(roomId, avatarUrl));
        dispatch(saveRoom(roomId));
        navigate(`${ROUTE_ROOM}/${roomId}`);
    };

    return (
        <>
            <group
                scale={monitorResponsive.scale}
                position={monitorResponsive.position}
                rotation-y={monitorResponsive.rotationY}
            >
                <Float speed={5} rotationIntensity={0} floatIntensity={1} floatingRange={[0, 0.05]}>
                    <LobbyMonitor position={[0, -0.85, -0.3]} scale={0.52} rotation={[0, Math.PI / -1.98, 0]} />
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
                        position={[roomResponsive.positionX, 0.2, 0.11]}
                        transform={!isSafari}
                        center
                        scale={0.121}
                        rotation-y={roomResponsive.rotationY}
                    >
                        <Content
                            isSafari={isSafari}
                            modalOpen={openCreateRoomModal}
                            isAuth={isAuth}
                            rooms={rooms as Room[]}
                            joinRoom={joinRoom}
                        />
                    </Html>
                </motion.group>
            </group>
        </>
    );
};

export default Monitor;
