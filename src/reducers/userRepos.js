import {
    REQUEST_GET,
    REQUEST_GET_FAILURE,
    REQUEST_GET_USER_REPOS_SUCCESS,
} from "../actions/constants";

const userRepos = (
    state = {
        isFetching: false,
        data: [],
        error: ''
    },
    action
) => {
    switch (action.type) {
        case REQUEST_GET:
            return { ...state, isFetching: true}
        case REQUEST_GET_USER_REPOS_SUCCESS:
            console.log('get user repos')
            console.log(action.data)
            return { ...state, data: action.data, isFetching: false}
        case REQUEST_GET_FAILURE:
            return { ...state, error: action.error, isFetching: false}
        default:
            return state
    }
}

export default userRepos;