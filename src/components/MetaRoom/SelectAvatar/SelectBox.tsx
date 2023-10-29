import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Environment, MeshPortalMaterial, RoundedBox, Text, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import * as THREE from 'three';
import { avatarSelectButtonDisplay } from '@/redux/actions/interfaceAction';

type SelectBoxProps = {
    children: React.ReactNode;
    texture: string;
    name: string;
    active: string;
    setHovered: (value: string | null) => void;
};

const SelectBox = ({ children, texture, name, active, setHovered, ...props }: SelectBoxProps) => {
    const dispatch = useDispatch();
    const map = useTexture(texture);
    const portalMaterial = useRef(null);

    const avatarDisplayHandler = (value: string) => {
        dispatch(avatarSelectButtonDisplay(value));
    };

    useFrame((_state, delta) => {
        const worldOpen = active === name;

        if (!portalMaterial.current) return;
        easing.damp(portalMaterial.current, 'blend', worldOpen ? 1 : 0, 0.2, delta);
    });

    return (
        <group {...props}>
            <Text font="fonts/NotoSansKR-Bold.ttf" fontSize={0.16} position={[0, -1.3, 0.051]} anchorY={'bottom'}>
                {name}
                <meshBasicMaterial color="#000" toneMapped={false} />
            </Text>
            <RoundedBox
                name={name}
                args={[2, 3, 0.1]}
                onClick={() => avatarDisplayHandler(name)}
                onPointerEnter={() => setHovered(name)}
                onPointerLeave={() => setHovered(null)}
            >
                <MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide}>
                    <ambientLight intensity={1} />
                    <Environment preset="sunset" />
                    {children}
                    <mesh>
                        <sphereGeometry args={[5, 64, 64]} />
                        <meshStandardMaterial map={map} side={THREE.BackSide} />
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
        </group>
    );
};

export default SelectBox;
