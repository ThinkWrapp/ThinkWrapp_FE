import { NavigateFunction } from 'react-router-dom';
import MonitorRoomLists from '../MonitorRoomLists';
import useIsAuth from '@/hooks/useIsAuth';
import { LOGIN } from '@/constants/auth';
import { CREATE_ROOM } from '@/constants/room';
import {
    ChooseRoom,
    CreateRoomButton,
    MonitorRoomContainer,
    MonitorTitle,
    MonitorWrapper,
    NoAuthMonitor,
} from './style';

type MonitorRoomProps = {
    isSafari: boolean;
    navigate: NavigateFunction;
    modalOpen: (modalKeyword: string) => void;
};

export default function MonitorContent({ isSafari, navigate, modalOpen }: MonitorRoomProps) {
    const isAuth = useIsAuth((state) => state.isAuth);

    return (
        <MonitorRoomContainer $isSafari={isSafari}>
            <MonitorWrapper>
                <MonitorTitle>
                    ThinkWrapp에 오신 것을
                    <br />
                    환영합니다.
                </MonitorTitle>
                <ChooseRoom>들어가실 방을 선택해 주세요</ChooseRoom>
                {isAuth && <MonitorRoomLists navigate={navigate} />}
                {!isAuth && <NoAuthMonitor onClick={() => modalOpen(LOGIN)}>로그인시 이용 가능합니다</NoAuthMonitor>}
                <CreateRoomButton onClick={() => modalOpen(CREATE_ROOM)}>방 생성하기</CreateRoomButton>
            </MonitorWrapper>
        </MonitorRoomContainer>
    );
}
