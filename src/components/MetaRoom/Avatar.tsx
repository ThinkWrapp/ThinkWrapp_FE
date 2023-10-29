import { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { SkeletonUtils } from 'three-stdlib';

type AvatarProps = {
    avatarUrl?: string;
};

const Avatar = ({ avatarUrl = '/models/man.glb' }: AvatarProps) => {
    const { scene } = useGLTF(avatarUrl);
    const avatar = useRef();
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

    return (
        <motion.group
            initial={{
                y: 3,
                rotateY: Math.PI * 4,
                scale: 0,
            }}
            animate={{
                y: 0,
                rotateY: 0,
                scale: 1,
            }}
            transition={{
                delay: 0.8,
                mass: 5,
                stiffness: 200,
                damping: 42,
            }}
        >
            <primitive object={clone} ref={avatar} />
        </motion.group>
    );
};

export default Avatar;
