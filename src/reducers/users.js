import {REQUEST_GET_FAILURE, REQUEST_GET_SUCCESS, REQUEST_GET} from "../actions/constants"
import axios from "axios";

// class GetAPI {
//
//     static getUsers = async () => {
//         //Retrieve data from Github API
//         const search = 'minh'; //setup the 'minh' as the searching keywords
//         let response = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
//         return response.json;
//     }
// }


const users = (
    state={
        isFetching: false,
        error: '',
        items: []
        },
    action) => {
    // console.log(state)
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