import { useSelector } from 'react-redux';
import { DummyHuman } from '@/components/3DModels/DummyHuman';
import { Man } from '@/components/3DModels/Man';
import { Woman } from '@/components/3DModels/Woman';
import { RootState } from '@/redux/reducers';
import { useResponsive } from '@/hooks/useResponsive';
import { getDeviceConfig } from '@/utils/getDeviceConfig';
import { MAN_AVATAR_URL, WOMAN_AVATAR_URL } from '@/constants/route';

const LobbyAvatar = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    const avatarUrl = useSelector((state: RootState) => state.avatar.avatarUrl);

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
            {(!isAuth || !avatarUrl) && (
                <DummyHuman
                    position-z={-1}
                    position-x={0.5 * goldenRatio}
                    position-y={avatarResponsive.positionY}
                    rotation-y={-Math.PI / 8}
                />
            )}
            {isAuth && avatarUrl === MAN_AVATAR_URL && (
                <Man
                    nameSpace="lobby"
                    position-z={-1}
                    position-x={0.5 * goldenRatio}
                    position-y={avatarResponsive.positionY}
                    rotation-y={-Math.PI / 8}
                />
            )}
            {isAuth && avatarUrl === WOMAN_AVATAR_URL && (
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
