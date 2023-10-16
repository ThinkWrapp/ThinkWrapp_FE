import {
    OPEN_MODAL,
    CLOSE_MODAL,
    CHANGE_AUTH_STATE,
    openModal,
    closeModal,
    changeAuthState,
} from '@/redux/actions/modalAction';

type ModalAction = ReturnType<typeof openModal> | ReturnType<typeof closeModal> | ReturnType<typeof changeAuthState>;

const initialState = {
    modalState: false,
    authState: '로그인',
};

const modalReducer = (state = initialState, action: ModalAction) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalState: action.payload.modalState,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalState: action.payload.modalState,
                authState: '로그인',
            };
        case CHANGE_AUTH_STATE:
            return {
                ...state,
                authState: action.payload.authState,
            };
        default:
            return state;
    }
};

export default modalReducer;
