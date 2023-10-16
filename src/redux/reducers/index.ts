import { combineReducers } from 'redux';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    modal: modalReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
