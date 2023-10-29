import { CHARACTER, HOME, ROOM, linkCharacter, linkHome, linkRoom } from '../actions/RoutePerstistAction';

type RoutePersistAction = ReturnType<typeof linkCharacter> | ReturnType<typeof linkRoom> | ReturnType<typeof linkHome>;

type RouteState = {
    routeState: string;
};

const initialState: RouteState = {
    routeState: '',
};

const routePersistReducer = (state = initialState, action: RoutePersistAction) => {
    switch (action.type) {
        case CHARACTER:
            return {
                ...state,
                routeState: action.payload.link,
            };
        case ROOM:
            return {
                ...state,
                routeState: action.payload.link,
            };
        case HOME:
            return {
                ...state,
                routeState: action.payload.link,
            };
        default:
            return state;
    }
};

export default routePersistReducer;
