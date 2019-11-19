import {
    REQUEST_GET_FAILURE,
    REQUEST_GET_SUCCESS,
    REQUEST_GET,
    ENTER_KEYWORDS,
    SELECT_USER,
    REQUEST_GET_USER_SUCCESS, REQUEST_GET_USER_REPOS_SUCCESS
} from "./constants"
import axios from "axios";

export const enterKeywords = (keywords) =>{
    return {
        type: ENTER_KEYWORDS,
        keywords
    }
}

export const selectUser = (id) => {
    return {
        type: SELECT_USER,
        id
    }
}

export const requestGet = () => ({
    type: REQUEST_GET
})

export const requestGetSuccess = (items) => ({
    type: REQUEST_GET_SUCCESS,
    items
})

export const requestGetUserSuccess = (data) => ({
    type: REQUEST_GET_USER_SUCCESS,
    data
})

export const requestGetUserReposSuccess = (data) => ({
    type: REQUEST_GET_USER_REPOS_SUCCESS,
    data
})

export const requestGetFailure = (message) => ({
    type: REQUEST_GET_FAILURE,
    error: message
})

export const fetchGets = (keywords) => (dispatch) => {
    // dispatch(enterKeywords(keywords))
    // console.log('start fetch')
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

export const fetchGetUser = (id) => (dispatch) => {
    console.log('start fetch user')
    dispatch(requestGet())


    //Retrieve user repositories
    let url = `https://api.github.com/users/${id}/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    let response = axios.get(url).then(
        response => {
            console.log('asdfasfasdf')
            console.log(response.data)
            dispatch(requestGetUserReposSuccess(response.data))
        }
    ).catch(
        error => dispatch(requestGetFailure(error))
    )

    // Retrieve data of a user from GitHub API
    url = `https://api.github.com/users/${id}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    console.log(url)
    response = axios.get(url).then(
        response => {
            // console.log('enter')
            // console.log(response.data)
            dispatch(requestGetUserSuccess(response.data))
        }).catch(
        error => {
            dispatch(requestGetFailure(error))
        }
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