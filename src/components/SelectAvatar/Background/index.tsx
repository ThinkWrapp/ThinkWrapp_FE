import { Cloud, Environment, Sky, Stars } from '@react-three/drei';

export default function Background() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <Environment preset="sunset" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sky
                distance={45000}
                rayleigh={6}
                mieCoefficient={0.005}
                mieDirectionalG={0.9}
                inclination={0.46}
                azimuth={0.25}
            />
            <Cloud color="#c0c0dd" position={[0, 3, -150]} scale={[5, 3.3, 8]} />
        </>
    );
}
