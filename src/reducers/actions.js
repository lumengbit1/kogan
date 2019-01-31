import {FETCH_REQUEST,FETCH_SUCCESS,FETCH_FAITURE} from './constants'
// import fetch from 'isomorphic-fetch';
import 'whatwg-fetch'

export function fetchRequest() {
    return {
      type: FETCH_REQUEST
    }
  }
  
  export function fetchSuccess(data) {
    return {
      type: FETCH_SUCCESS,
      data
    }
  }
  
  export function fetchFailure(ex) {
    return {
      type: FETCH_FAITURE,
      ex
    }
  }



export const getProducts=()=>{
    return (dispatch)=>{
        dispatch(fetchRequest())
        return fetch('/api/products/1')
        .then(res => res.json())
        .then(json => dispatch(fetchSuccess(json)))
        .catch(ex => dispatch(fetchFailure(ex)))         
    }
};

