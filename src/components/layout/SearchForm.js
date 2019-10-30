import React from 'react';

const SearchForm = (props) => {
    const onKeywordsChange = (e) => {
        props.onKeywordsChange(e.target.value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onFormSubmit();
    }

    return (
        <form className={'form-group mb-5'} onSubmit={onFormSubmit}>
            <input
                className={'form-control mb-3'}
                type="text"
                value={props.keywords}
                onChange={onKeywordsChange}
                name={'keyword'}
                placeholder={'Enter user ...'}/>
            <input
                className={'btn btn-info w-100'}
                type={'submit'}
                value={'Search'}
                name={'btn-search'}/>
        </form>
    );
}

export default SearchForm;