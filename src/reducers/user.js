import {REQUEST_GET} from "../actions/constants";
import {REQUEST_GET_FAILURE} from "../actions/constants";
import {REQUEST_GET_USER_SUCCESS} from "../actions/constants";
const user = (
    state = {
        isFetching: false,
        error: '',
        items: []
    },
    action
) => {
    switch (action.type) {
        case REQUEST_GET:
            return { ...state, isFetching: true}
        case REQUEST_GET_USER_SUCCESS:
            return { ...state, items: action.items, isFetching: false}
        case REQUEST_GET_FAILURE:
            return { ...state, error: action.error, isFetching: false}
        default:
            return state
    }
}

export default user;