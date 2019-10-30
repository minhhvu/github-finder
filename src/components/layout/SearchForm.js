import React from 'react';

const SearchForm = (props) => {
    const onKeywordsChange = (e) => {
        props.onKeywordsChange(e.target.value);
    }

    return (
        <form className={'form-group'}>
            <input
                className={'form-control mb-3'}
                type="text"
                value={props.keywords}
                onChange={onKeywordsChange}
                name={'keyword'}
                placeholder={'Enter user ...'}/>
            <input
                className={'btn btn-info w-100'}
                type={'button'}
                value={'Search'}
                onClick={props.onFormSubmit}
                name={'btn-search'}/>
        </form>
    );
}

export default SearchForm;