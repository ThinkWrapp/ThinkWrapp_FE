import {
    OPEN_MODAL,
    CLOSE_MODAL,
    CHANGE_AUTH_STATE,
    openModal,
    closeModal,
    changeAuthState,
} from '@/redux/actions/modalAction';

type ModalAction = ReturnType<typeof openModal> | ReturnType<typeof closeModal> | ReturnType<typeof changeAuthState>;
type ModalState = {
    modalState: boolean;
    modalValueState: string | undefined;
};

const initialState: ModalState = {
    modalState: false,
    modalValueState: undefined,
};

const modalReducer = (state = initialState, action: ModalAction) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalState: action.payload.modalState,
                modalValueState: action.payload.modalValueState,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalState: action.payload.modalState,
                modalValueState: action.payload.modalValueState,
            };
        case CHANGE_AUTH_STATE:
            return {
                ...state,
                modalValueState: action.payload.modalValueState,
            };
        default:
            return state;
    }
};

export default modalReducer;
