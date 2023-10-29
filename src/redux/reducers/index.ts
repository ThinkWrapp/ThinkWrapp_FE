import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { avatarSelectConfig, routeConfig } from '../persist/config';
import interfaceReducer from './interfaceReducer';
import modalReducer from './modalReducer';
import userReducer from './userReducer';
import avatarPersistReducer from './avatarPersistReducer';
import routePersistReducer from './RoutePersistReducer';

const rootReducer = combineReducers({
    interface: interfaceReducer,
    modal: modalReducer,
    user: userReducer,
    avatar: persistReducer(avatarSelectConfig, avatarPersistReducer),
    route: persistReducer(routeConfig, routePersistReducer),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
