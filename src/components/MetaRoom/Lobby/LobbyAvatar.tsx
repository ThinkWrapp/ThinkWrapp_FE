import { useSelector } from 'react-redux';
import { DummyHuman } from '@/components/3DModels/DummyHuman';
import { Man } from '@/components/3DModels/Man';
import { Woman } from '@/components/3DModels/Woman';
import { RootState } from '@/redux/reducers';
import useIsAuth from '@/hooks/useIsAuth';
import { AVATAR } from '@/constants/auth';
import { useResponsive } from '@/hooks/useResponsive';
import { getDeviceConfig } from '@/utils/getDeviceConfig';

const LobbyAvatar = () => {
    const isAuth = useIsAuth((state) => state.isAuth);
    const avatarState = useSelector((state: RootState) => state.avatar.avatarState);

    const goldenRatio = Math.min(1, window.innerWidth / 1600);
    const device = useResponsive();

    const avatarConfig = {
        mobile: {
            positionY: -0.4,
        },
        desktop: {
            positionY: 0,
        },
    };

    const avatarResponsive = getDeviceConfig(device, avatarConfig);

    return (
        <>
            {(!isAuth || !avatarState) && (
                <DummyHuman
                    position-z={-1}
                    position-x={0.5 * goldenRatio}
                    position-y={avatarResponsive.positionY}
                    rotation-y={-Math.PI / 8}
                />
            )}
            {isAuth && avatarState === AVATAR.gender.male && (
                <Man
                    nameSpace="lobby"
                    position-z={-1}
                    position-x={0.5 * goldenRatio}
                    position-y={avatarResponsive.positionY}
                    rotation-y={-Math.PI / 8}
                />
            )}
            {isAuth && avatarState === AVATAR.gender.female && (
                <Woman
                    nameSpace="lobby"
                    position-z={-1}
                    position-x={0.5 * goldenRatio}
                    position-y={avatarResponsive.positionY}
                    rotation-y={-Math.PI / 8}
                />
            )}
        </>
    );
};

export default LobbyAvatar;
