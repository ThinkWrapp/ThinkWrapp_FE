import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import interfaceReducer from './interfaceReducer';
import { persistReducer } from 'redux-persist';
import { avatarSelectConfig } from '../persist/config';
import avatarPersistReducer from './avatarPersistReducer';

const rootReducer = combineReducers({
    interface: interfaceReducer,
    modal: modalReducer,
    avatar: persistReducer(avatarSelectConfig, avatarPersistReducer),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
