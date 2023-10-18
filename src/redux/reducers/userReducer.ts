import { IS_AUTH, userLoginChecking } from '@/redux/actions/userAction';
import { checkAuth } from '@/utils/user';

type UserAction = ReturnType<typeof userLoginChecking>;

const initialState = {
    isAuth: checkAuth(),
};

const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.payload.isAuth,
            };
        default:
            return state;
    }
};

export default userReducer;
