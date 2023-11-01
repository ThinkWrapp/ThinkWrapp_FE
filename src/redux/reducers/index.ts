import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { avatarSelectConfig, roomConfig, routeConfig } from '../persist/config';
import interfaceReducer from './interfaceReducer';
import modalReducer from './modalReducer';
import userReducer from './userReducer';
import avatarPersistReducer from './avatarPersistReducer';
import routePersistReducer from './RoutePersistReducer';
import socketReducer from './socketReducer';
import roomPersistReducer from './roomPersistReducer';

const rootReducer = combineReducers({
    interface: interfaceReducer,
    modal: modalReducer,
    user: userReducer,
    avatar: persistReducer(avatarSelectConfig, avatarPersistReducer),
    route: persistReducer(routeConfig, routePersistReducer),
    room: persistReducer(roomConfig, roomPersistReducer),
    socket: socketReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
