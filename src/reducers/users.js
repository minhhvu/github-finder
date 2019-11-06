import {DO_SEARCH} from "./constants"

const users = (state=[], action) => {
    switch (action.type) {
        case DO_SEARCH:
            return action.users
        default:
            return state
    }
}

export default users;