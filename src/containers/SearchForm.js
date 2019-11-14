import React from 'react';
import {connect} from 'react-redux'
import {enterKeywords, fetchGets} from "../actions";

const SearchForm = ({dispatch}) => {
    let input

    const onFormSubmit = (e) => {
        e.preventDefault()

        console.log('Click on')
        let keywords = input.value
        dispatch(enterKeywords(keywords))

        fetchGets(keywords)(dispatch)

        // if (!input.value.trim()) {
        //     return
        // }

        // let keywords = input.value
        // let getUsers= async () => {
        //     //Retrieve data from Github API
        //     const search = keywords !=='' ? keywords : 'minh'; //setup the 'minh' as the searching keywords
        //     let response = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        //
        //     const users = response.data.items
        //     dispatch(doSearch(users))
        //
        //     return {success: true};
        // }
        //
        // try {
        //     getUsers()
        // } catch (e) {
        //     console.log('error')
        //     console.error(e)
        // }
    }

    return (
        <form className={'form-group mb-4 mt-4'} onSubmit={onFormSubmit}>
            <input
                className={'form-control mb-3'}
                type="text"
                // value={'minhhai'}
                // onChange={onKeywordsChange}
                // name={'keyword'}
                ref={node => input = node}
                placeholder={'Enter user ...'}
                />
            <button type={'submit'}>Search</button>
        </form>
    )

    // const onKeywordsChange = (e) => {
    //     props.onKeywordsChange(e.target.value);
    // }
    // const onFormSubmit = (e) => {
    //     e.preventDefault();
    //     props.onFormSubmit();
    // }
    //
    // return (
    //     <form className={'form-group mb-4 mt-4'} onSubmit={onFormSubmit}>
    //         <input
    //             className={'form-control mb-3'}
    //             type="text"
    //             value={props.keywords}
    //             onChange={onKeywordsChange}
    //             name={'keyword'}
    //             placeholder={'Enter user ...'}/>
    //         <input
    //             className={'btn btn-dark w-100'}
    //             type={'submit'}
    //             value={'Search'}
    //             name={'btn-search'}/>
    //     </form>
    // );
}

const mapStateToProps = (state) => (
    {
        keywords: state.keywords
    }
)

export default connect()(SearchForm);