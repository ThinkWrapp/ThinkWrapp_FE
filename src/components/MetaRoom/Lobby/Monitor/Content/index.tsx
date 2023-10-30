import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import RoomLists from '../RoomLists';
import { LOGIN } from '@/constants/auth';
import { CREATE_ROOM } from '@/constants/room';
import { ChooseRoom, Container, CreateRoomButton, NoAuthMonitor, Title, Wrapper } from './style';

type ContentProps = {
    isSafari: boolean;
    isAuth: boolean | undefined;
    modalOpen: (modalKeyword: string) => void;
};

const Content = ({ isSafari, modalOpen, isAuth }: ContentProps) => {
    return (
        <Container $isSafari={isSafari}>
            <Wrapper>
                <Title>
                    ThinkWrapp에 오신 것을
                    <br />
                    환영합니다.
                </Title>
                <ChooseRoom>들어가실 방을 선택해 주세요</ChooseRoom>
                {isAuth && <RoomLists />}
                {!isAuth && <NoAuthMonitor onClick={() => modalOpen(LOGIN)}>로그인시 이용 가능합니다</NoAuthMonitor>}
                <CreateRoomButton onClick={() => modalOpen(CREATE_ROOM)}>방 생성하기</CreateRoomButton>
            </Wrapper>
        </Container>
    );
};

export default Content;
