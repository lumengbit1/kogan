import {FETCHDATA_ACTION} from './constants'


const initialState = ({
    fetchdata: null,
});

function counter(state = initialState, action) {
     const fetchdata =state.fetchdata;
    switch (action.type) {
        case FETCHDATA_ACTION:
            return { fetchdata: action.data }
        default:
            return state
    }
}

export default counter;