import { useState } from 'react';
import { ChatButton, ChatContainer, ChatInput } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { socketChatMessage } from '@/redux/actions/socketAciton';
import { RootState } from '@/redux/reducers';

const Chat = () => {
    const [chatMessage, setChatMessage] = useState('');
    const userName = useSelector((state: RootState) => state.user.userName);
    const dispatch = useDispatch();
    const sendChatMessage = () => {
        if (chatMessage.length > 0) {
            dispatch(socketChatMessage(chatMessage, userName as string));
            setChatMessage('');
        }
    };

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    };

    return (
        <ChatContainer>
            <ChatInput
                type="text"
                placeholder="메세지를 입력해주세요..."
                onKeyDown={keyDownHandler}
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
            />
            <ChatButton onClick={sendChatMessage}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width={24}
                    height={24}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                </svg>
            </ChatButton>
        </ChatContainer>
    );
};

export default Chat;
