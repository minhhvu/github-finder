import {SELECT_USER} from "../actions/constants"
const user = (state = {}, action) => {
    switch (action.type) {
        case SELECT_USER:
            return {
                singleUse: action.singleUser,
                userRepos: action.userRepos
            }
        default:
            return state
    }
}

export default user;