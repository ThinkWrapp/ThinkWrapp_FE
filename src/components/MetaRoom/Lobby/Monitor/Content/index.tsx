import RoomLists from '../RoomLists';
import { CREATE_ROOM } from '@/constants/room';
import { LOGIN } from '@/constants/modal';
import { Room } from '@/types/room';
import { ChooseRoom, Container, CreateRoomButton, NoAuthMonitor, NoRoomMonitor, Title, Wrapper } from './style';

type ContentProps = {
    isSafari: boolean;
    isAuth: boolean | undefined;
    modalOpen: (modalKeyword: string) => void;
    rooms: Room[];
    joinRoom: (roomId: string) => void;
    userName?: string;
    saveUserName?: string;
};

const Content = ({ isSafari, modalOpen, isAuth, rooms, joinRoom, userName, saveUserName }: ContentProps) => {
    return (
        <Container $isSafari={isSafari}>
            <Wrapper>
                <Title>
                    <span>
                        {(userName !== undefined && `${userName}님`) || (saveUserName !== '' && `${saveUserName}님`)}
                    </span>{' '}
                    ThinkWrapp에 오신 것을
                    <br />
                    환영합니다.
                </Title>
                <ChooseRoom>들어가실 방을 선택해 주세요</ChooseRoom>
                {isAuth ? (
                    rooms?.length ? (
                        <RoomLists rooms={rooms} joinRoom={joinRoom} />
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
