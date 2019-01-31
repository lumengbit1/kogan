import React from 'react'
import Enzyme,{ configure, shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './../App'
import Content from './../components/Content'

Enzyme.configure({ adapter: new Adapter() });


describe(`Test <App />`, () => {
    const warpper = shallow(<App />);
    it('1. Include one <div>',()=>{
        expect(warpper.find('div').length).toBe(1);
    })

    it('2. "Header" Could be rendered', () => {
        expect(warpper.find('Content').exists());
    })
})
