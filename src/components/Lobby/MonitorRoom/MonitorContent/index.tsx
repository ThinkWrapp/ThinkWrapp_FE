import { NavigateFunction } from 'react-router-dom';
import MonitorRoomLists from '../MonitorRoomLists';
import { ChooseRoom, CreateRoomButton, MonitorRoomContainer, MonitorTitle, MonitorWrapper } from './style';

type MonitorRoomProps = {
    isSafari: boolean;
    navigate: NavigateFunction;
    modalOpen: () => void;
};

export default function MonitorContent({ isSafari, navigate, modalOpen }: MonitorRoomProps) {
    return (
        <MonitorRoomContainer $isSafari={isSafari}>
            <MonitorWrapper>
                <MonitorTitle>
                    ThinkWrapp에 오신 것을
                    <br />
                    환영합니다.
                </MonitorTitle>
                <ChooseRoom>들어가실 방을 선택해 주세요</ChooseRoom>
                <MonitorRoomLists navigate={navigate} />
                <CreateRoomButton onClick={modalOpen}>방 생성하기</CreateRoomButton>
            </MonitorWrapper>
        </MonitorRoomContainer>
    );
}
