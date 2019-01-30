import React, { Component } from "react";
import './../../css/style.css';
import {connect} from 'react-redux';
import {getEventList} from './../../reducers/actions'


class Content extends Component{


    componentDidMount(){
        const {onfetchData} = this.props;
        onfetchData();
    }

    render(){
        const {content} = this.props;
        return(

            <div className='content'>
                {content!=null?
                    content.map((item)=>{
                        return(
                            <div>
                                <div>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    }) :''
                }                
            </div>
        )
    }
}

// Map Redux state to component props
export const mapStateToProps=(state)=> {
    return {
        content: state.fetchdata
    }
}

// Map Redux actions to component props
export const mapDispatchToProps=(dispatch)=> {
    return {
        onfetchData: () => dispatch(getEventList())
    }
}

const IContent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)

export default IContent;