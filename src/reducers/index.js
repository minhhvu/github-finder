import user from "./user";
import users from "./users";
import keywords from "./keywords";
import userRepos from "./userRepos";
import { combineReducers } from 'redux'

export default combineReducers({
    keywords,
    userRepos,
    users,
    user
})
