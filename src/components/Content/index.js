import React, { Component } from "react";
import './../../css/style.css';
import {connect} from 'react-redux';
import {getProducts} from './../../reducers/actions'


class Content extends Component{
    constructor(props) {
        super(props);
        this.state={
            weight: 0
        }
      }
    componentDidMount(){
        const {onfetchData} = this.props;
        onfetchData();
    }

    cubiccmTom = (centimetres)=>{
        return centimetres/1000000;
    }

    gramToKilo = (gram)=>{
        return gram/1000;
    }

    calcWeight=(dimensions)=>{
        const {content} = this.props;
        let weight_sum = 0;
        let average_weight =0;
        let air_num=0
        content.map(item=>{
            if(item.category==='Air Conditioners'){
                let size = item.size;
                weight_sum += this.gramToKilo(item.weight)*this.cubiccmTom(size.width*size.length*size.height);
                air_num ++;
            }
            
        })
        console.log(content.length)
        average_weight = weight_sum/air_num;
        this.setState({weight:average_weight});
    }

    render(){
        return(
            <div className='content'>
                <label htmlFor='average_cubic_weight'>average cubic weight:</label>
                <input id='average_cubic_weight' value={this.state.weight}  readOnly/>kg
                <br/>
                <input type='button' value='Calculate Weight' onClick={this.calcWeight}/>
            </div>
        )
    }
}

// Map Redux state to component props
export const mapStateToProps=(state)=> {
    let fetchdata=0;
    if(state.fetchdata!=null){
        fetchdata = Object.values(state.fetchdata);
    }
    return {
        content: fetchdata[0]
    }
}

// Map Redux actions to component props
export const mapDispatchToProps=(dispatch)=> {
    return {
        onfetchData: () => dispatch(getProducts())
    }
}

const IContent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)

export default IContent;