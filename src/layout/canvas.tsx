import { Canvas } from '@react-three/fiber';

type CanvasLayoutProps = {
    children: React.ReactNode;
    position?: [number, number, number];
};

const CanvasLayout = ({ children, position = [0, 8, 2] }: CanvasLayoutProps) => {
    return (
        <Canvas
            shadows
            camera={{
                position,
                fov: 30,
            }}
        >
            {children}
        </Canvas>
    );
};

export default CanvasLayout;
