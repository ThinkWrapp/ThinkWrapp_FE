import RoomLists from '../RoomLists';
import { LOGIN } from '@/constants/auth';
import { CREATE_ROOM } from '@/constants/room';
import { Room } from '@/types/room';
import { ChooseRoom, Container, CreateRoomButton, NoAuthMonitor, NoRoomMonitor, Title, Wrapper } from './style';

type ContentProps = {
    isSafari: boolean;
    isAuth: boolean | undefined;
    modalOpen: (modalKeyword: string) => void;
    rooms: Room[];
};

const Content = ({ isSafari, modalOpen, isAuth, rooms }: ContentProps) => {
    return (
        <Container $isSafari={isSafari}>
            <Wrapper>
                <Title>
                    ThinkWrapp에 오신 것을
                    <br />
                    환영합니다.
                </Title>
                <ChooseRoom>들어가실 방을 선택해 주세요</ChooseRoom>
                {isAuth ? (
                    rooms.length ? (
                        <RoomLists rooms={rooms} />
                    ) : (
                        <NoRoomMonitor>입장할 방이 없습니다.</NoRoomMonitor>
                    )
                ) : null}
                {!isAuth && <NoAuthMonitor onClick={() => modalOpen(LOGIN)}>로그인시 이용 가능합니다</NoAuthMonitor>}
                {isAuth && <CreateRoomButton onClick={() => modalOpen(CREATE_ROOM)}>방 생성하기</CreateRoomButton>}
            </Wrapper>
        </Container>
    );
};

export default Content;
