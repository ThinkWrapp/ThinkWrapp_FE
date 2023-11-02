import { RootState } from '@/redux/reducers';
import { PlayerChatMessage } from '@/types/character';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChatHistoryButton, ChatHistoryContainer, ChatHistoryWrapper, ChatLog, Dialog } from './style';
import { useLocation } from 'react-router-dom';
import { socketPlayerChatMessageReset } from '@/redux/actions/socketAciton';
import { ROUTE_ROOM } from '@/constants/route';

const ChatHistory = () => {
    const [chatHistoryHeight, setChatHistoryHeight] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const playerChatMessage = useSelector((state: RootState) => state.socket.myChatMessage);
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);
    const [messageHistory, setMessageHistory] = useState<unknown | PlayerChatMessage[]>([]);
    const location = useLocation();
    const dispatch = useDispatch();

    const chatHistoryHeightHandler = () => {
        setChatHistoryHeight((prevValue) => !prevValue);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (!playerChatMessage) return;
        setMessageHistory((prevMessages: PlayerChatMessage[]) => [...prevMessages, playerChatMessage]);
    }, [playerChatMessage]);

    useEffect(scrollToBottom, [messageHistory]);

    useEffect(() => {
        if (location.pathname.includes(`/${ROUTE_ROOM}/`)) {
            dispatch(socketPlayerChatMessageReset());
        }

        if (location.pathname === '/') {
            setMessageHistory([]);
            setChatHistoryHeight(false);
        }
    }, [location.pathname]);

    return (
        <ChatHistoryContainer>
            <ChatHistoryWrapper $chatHistoryHeight={chatHistoryHeight}>
                <ChatHistoryButton
                    type="button"
                    onClick={chatHistoryHeightHandler}
                    $chatHistoryHeight={chatHistoryHeight}
                />
                <ChatLog>
                    {(messageHistory as PlayerChatMessage[])?.map((msg, idx) => (
                        <Dialog key={idx} $id={msg.id} $user={roomJoined?.id as string}>
                            {msg.id === roomJoined?.id ? '나: ' : ''}
                            {msg.message}
                        </Dialog>
                    ))}
                    <div ref={messagesEndRef} />
                </ChatLog>
            </ChatHistoryWrapper>
        </ChatHistoryContainer>
    );
};

export default ChatHistory;
