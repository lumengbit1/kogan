import {FETCHDATA_ACTION} from './constants'

export const initListAction=(jsondata)=>({
    type:FETCHDATA_ACTION,
    data:jsondata
});


export const getEventList=()=>{
    return (dispatch)=>{
         return fetch('http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1')
            .then((res)=>{
                return res.json();       
            }).then((json)=>{
                dispatch(initListAction(json))
            })
            
 
    }
};

