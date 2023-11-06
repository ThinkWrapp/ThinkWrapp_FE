import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { avatarSelectConfig, roomConfig } from '../persist/config';
import interfaceReducer from './interfaceReducer';
import modalReducer from './modalReducer';
import userReducer from './userReducer';
import avatarPersistReducer from './avatarPersistReducer';
import socketReducer from './socketReducer';
import roomPersistReducer from './roomPersistReducer';
import modeReducer from './modeReducer';
import roomItemReducer from './itemReducer';
import videoReducer from './videoReducer';

const rootReducer = combineReducers({
    interface: interfaceReducer,
    modal: modalReducer,
    user: userReducer,
    mode: modeReducer,
    item: roomItemReducer,
    video: videoReducer,
    avatar: persistReducer(avatarSelectConfig, avatarPersistReducer),
    room: persistReducer(roomConfig, roomPersistReducer),
    socket: socketReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
