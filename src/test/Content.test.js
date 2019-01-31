import React from 'react'
import Enzyme,{ configure, shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './../reducers/actions'
import * as types from './../reducers/constants'
import fetchMock from 'fetch-mock'


Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions testing', () => {
    it('1.fetchRequest Testing', () => {
        const expectedAction = {
            type: types.FETCH_REQUEST,
        }
        expect(actions.fetchRequest()).toEqual(expectedAction)
    })

    it('2.fetchSuccess Testing', () => {
        const expectedAction = {
            type: types.FETCH_SUCCESS,
        }
        expect(actions.fetchSuccess()).toEqual(expectedAction)
    })

    it('3.fetchFailure Testing', () => {
        const expectedAction = {
            type: types.FETCH_FAILURE,
        }
        expect(actions.fetchFailure()).toEqual(expectedAction)
    })
})

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })
    
  
    it('creates FETCH_SUCCESS when fetching todos has been done', () => {
        fetchMock
        .getOnce('http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } })
  
      const expectedActions = [
        {type:types.FETCH_REQUEST},
        { type: types.FETCHDATA_ACTION, data: { todos: ['do something']  } }
      ]
      const store = mockStore({ todos: [] })
  
        return store.dispatch(actions.getProducts()).then(()=>{
            expect(store.getActions()).toEqual(expectedActions)
        })
        
    })
  })