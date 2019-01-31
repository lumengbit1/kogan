import {FETCH_REQUEST,FETCH_SUCCESS,FETCH_FAITURE} from './constants'

const initialState = ({
    fetchdata: null,
});

function reducer(state = initialState, action) {
    const fetchdata =state.fetchdata;
    switch (action.type) {
        case FETCH_SUCCESS:
            return { fetchdata: action.data }
        default:
            return state
    }
}

export default reducer;