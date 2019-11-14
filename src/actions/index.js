import {REQUEST_GET_FAILURE, REQUEST_GET_SUCCESS, REQUEST_GET, ENTER_KEYWORDS} from "./constants"
import axios from "axios";

export const enterKeywords = (keywords) =>{
    return {
        type: ENTER_KEYWORDS,
        keywords
    }
}

export const requestGet = () => ({
    type: REQUEST_GET
})

export const requestGetSuccess = (items) => ({
    type: REQUEST_GET_SUCCESS,
    items
})

export const requestGetFailure = (message) => ({
    type: REQUEST_GET_FAILURE,
    error: message
})

export const fetchGets = (keywords) => (dispatch) => {
    // dispatch(enterKeywords(keywords))
    console.log('start fetch')
    dispatch(requestGet())

    let url = `https://api.github.com/search/users?q=${keywords}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    return axios.get(url).then(
        res => {
            dispatch(requestGetSuccess(res.data.items))
            console.log('response')
            console.log(res.data.items)
        }
    ).catch(
        error  => dispatch(requestGetFailure(error))
    )
}


// class GetAPI {
//     static getUsers = async () => {
//         //Retrieve data from Github API
//         const search = 'minh'; //setup the 'minh' as the searching keywords
//         let response = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//         return response.data.items;
//     }
// }

// const loadUsersSuccess = () => ({
//     type: LOAD_USERS_SUCCESS,
//     users
// })


// export const doSearch = (keywords) => (dispatch) => {
//
// }

// export const doSearch = (keywords) => (dispatch) => {
//
//     return {
//         type: DO_SEARCH,
//         // users
//     }
// }
//
// export const selectUser = (singleUser, userRepos) => ({
//     type: SELECT_USER,
//     singleUser,
//     userRepos
// })