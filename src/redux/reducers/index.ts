import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import userReducer from './userReducer';
import interfaceReducer from './interfaceReducer';

const rootReducer = combineReducers({
    interface: interfaceReducer,
    modal: modalReducer,
    user: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
