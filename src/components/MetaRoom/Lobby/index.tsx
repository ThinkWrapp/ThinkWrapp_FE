import { Suspense, useMemo, useEffect } from 'react';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { useDispatch, useSelector } from 'react-redux';
import ThinkWrappWorld3DText from './ThinkWrappWorld3DText';
import { King } from '@/components/3DModels/King';
import { Castle } from '@/components/3DModels/Castle';
import Ground from './Ground';
import Monitor from './Monitor';
import LobbyAvatar from './LobbyAvatar';
import Background from './Background';
import { profile } from '@/api/auth';
import { RootState } from '@/redux/reducers';
import { saveAvatar } from '@/redux/actions/avatarPersistAction';
import { useNavigate } from 'react-router-dom';
import { ROUTE_CHARACTER } from '@/constants/route';
import { loginSuccess } from '@/redux/sagas/loginSaga';
import { userName } from '@/redux/actions/userAction';

type LobbyProps = {
    loaded: boolean;
};

const Lobby = ({ loaded }: LobbyProps) => {
    const accumulativeShadows = useMemo(
        () => (
            <AccumulativeShadows temporal frames={30} alphaTest={0.85} scale={28} position={[0, 0, 0]}>
                <RandomizedLight amount={3} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -20]} />
                <RandomizedLight amount={1} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -20]} />
            </AccumulativeShadows>
        ),
        [],
    );
    const isAuth = useSelector((state: RootState) => state.user.isAuth);
    const avatarUrl = useSelector((state: RootState) => state.avatar.avatarUrl);
    const saveUserName = useSelector((state: RootState) => state.avatar.saveUserName);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if (isAuth) {
                const userData = await profile();
                dispatch(loginSuccess());

                if (!saveUserName) {
                    dispatch(userName(userData.username));
                }

                if (!avatarUrl && !userData?.avatarUrl) {
                    navigate(ROUTE_CHARACTER);
                }

                if (!avatarUrl && userData.avatarUrl) {
                    dispatch(saveAvatar(userData.avatarUrl));
                }
            }
        })();
    }, [isAuth]);

    return (
        <>
            <Background loaded={loaded} />
            <group position-y={-1.5}>
                <Monitor />
                <group position-z={-8} rotation-y={Math.PI / 6}>
                    <ThinkWrappWorld3DText />
                    <King />
                    <Castle />
                </group>
                <Ground />
                {accumulativeShadows}
                <Suspense>
                    <LobbyAvatar />
                </Suspense>
            </group>
        </>
    );
};

export default Lobby;
