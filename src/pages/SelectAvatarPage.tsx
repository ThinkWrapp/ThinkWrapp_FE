import Loader from '@/components/Loader';
import { SelectAvatar } from '@/components/SelectAvatar';
import { Canvas } from '@react-three/fiber';

export default function SelectAvatarPage() {
    return (
        <>
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
                <SelectAvatar />
            </Canvas>
            <Loader />
        </>
    );
}
