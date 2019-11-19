import {REQUEST_GET_FAILURE, REQUEST_GET_SUCCESS, REQUEST_GET} from "../actions/constants"
import axios from "axios";

const users = (
    state={
        isFetching: false,
        error: '',
        items: []
        },
    action) => {
    switch (action.type) {
        case REQUEST_GET:
            return { ...state, isFetching: true}
        case REQUEST_GET_SUCCESS:
            return { ...state, items: action.items, isFetching: false}
        case REQUEST_GET_FAILURE:
            return { ...state, error: action.error, isFetching: false}
        default:
            return state
    }
}

export default users;