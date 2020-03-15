import React from 'react';
import {connect} from 'react-redux'
import {enterKeywords, fetchGets} from "../actions";

const SearchForm = ({dispatch}) => {
    let input

    const onKeywordsChange = (e) => {
        e.preventDefault()
        dispatch(enterKeywords(e.target.value))
    }

    const onFormSubmit = (e) => {
        e.preventDefault()

        let keywords = input.value
        dispatch(enterKeywords(keywords))

        fetchGets(keywords)(dispatch)


    }

    return (
        <form className={'form-group mb-4 mt-4'} onSubmit={onFormSubmit}>
            <input
                className={'form-control mb-3'}
                type="text"
                ref={node => input = node}
                placeholder={'Enter user ...'}
                />
            <button type={'submit'} className={'btn btn-info w-100'}>Search</button>
        </form>
    )
}

const mapStateToProps = (state) => (
    {
        keywords: state.keywords
    }
)

export default connect()(SearchForm);