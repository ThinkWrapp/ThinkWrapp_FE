import { DummyHuman } from '@/components/3DModels/DummyHuman';
import { Man } from '@/components/3DModels/Man';
import { Woman } from '@/components/3DModels/Woman';
import { AVATAR } from '@/constants/auth';
import { RootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';

type LobbyAvatarProps = {
    isMobile: boolean;
    goldenRatio: number;
};

export default function LobbyAvatar({ isMobile, goldenRatio }: LobbyAvatarProps) {
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    const avatarState = useSelector((state: RootState) => state.avatar.avatarState);

    return (
        <>
            {(!isAuth || avatarState === '') && (
                <DummyHuman
                    position-z={-1}
                    position-x={0.5 * goldenRatio}
                    position-y={isMobile ? -0.4 : 0}
                    rotation-y={-Math.PI / 8}
                />
            )}
            {isAuth && avatarState === AVATAR.gender.male && (
                <Man
                    nameSpace="lobby"
                    position-z={-1}
                    position-x={0.5 * goldenRatio}
                    position-y={isMobile ? -0.4 : 0}
                    rotation-y={-Math.PI / 8}
                />
            )}
            {isAuth && avatarState === AVATAR.gender.female && (
                <Woman
                    nameSpace="lobby"
                    position-z={-1}
                    position-x={0.5 * goldenRatio}
                    position-y={isMobile ? -0.4 : 0}
                    rotation-y={-Math.PI / 8}
                />
            )}
        </>
    );
}
