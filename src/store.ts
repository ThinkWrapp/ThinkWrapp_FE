import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { persistStore } from 'redux-persist';

const store = createStore(rootReducer);

export default store;

export const persistor = persistStore(store);
