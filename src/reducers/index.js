import user from "./user";
import users from "./users";
import keywords from "./keywords";
import { combineReducers } from 'redux'

export default combineReducers({
    keywords,
    users,
    user
})
