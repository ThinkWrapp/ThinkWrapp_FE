import { DummyHuman } from '@/components/3DModels/DummyHuman';

type LobbyAvatarProps = {
    isMobile: boolean;
    goldenRatio: number;
};

export default function LobbyAvatar({ isMobile, goldenRatio }: LobbyAvatarProps) {
    return (
        <>
            <DummyHuman
                position-z={-1}
                position-x={0.5 * goldenRatio}
                position-y={isMobile ? -0.4 : 0}
                rotation-y={-Math.PI / 8}
            />
        </>
    );
}
