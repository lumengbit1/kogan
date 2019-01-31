import React from 'react'
import Enzyme,{ configure, shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import reducer from './../reducers/reducer'
import * as actions from './../reducers/actions'
import * as types from './../reducers/constants'

Enzyme.configure({ adapter: new Adapter() });

describe('Test reducer', () => {
    it('1.should return the initial state', () => {
        const initialState = {
            fetchdata: null,
        };
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('2.should handle FETCH_SUCCESS',()=>{
        const initialState = {
            fetchdata: null,
        };
        expect(reducer(initialState,{type:types.FETCH_SUCCESS,data:'Test'})).toEqual({fetchdata:'Test'})
    })


})