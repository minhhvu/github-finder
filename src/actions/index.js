import {DO_SEARCH, SELECT_USER} from "./constants"

export const doSearch = users => ({
    type: DO_SEARCH,
    users
})

export const selectUser = (singleUser, userRepos) => ({
    type: SELECT_USER,
    singleUser,
    userRepos
})