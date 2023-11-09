import { IS_AUTH, USER_NAME, userLoginChecking, userName } from '../actions/userAction';
import { checkAuth } from '@/utils/user';

type UserAction = ReturnType<typeof userLoginChecking> | ReturnType<typeof userName>;
type UserState = {
    isAuth: boolean | undefined;
    userName?: string;
};

const initialState: UserState = {
    isAuth: checkAuth(),
    userName: undefined,
};

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.payload.isAuth,
            };
        case USER_NAME:
            return {
                ...state,
                userName: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
