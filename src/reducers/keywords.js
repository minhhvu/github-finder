import {ENTER_KEYWORDS} from "../actions/constants";

const keywords = (state='', action) => {
    switch (action.type) {
        case ENTER_KEYWORDS:
            return { ...state, keywords: action.keywords}
        default:
            return state
    }
}

export default keywords;