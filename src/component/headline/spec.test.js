import React from 'react'
import { shallow } from 'enzyme';
import Headline from './index';
import { findDataByAttr } from '../../Utils/index';

export const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};
describe('Headline Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('It should render without errors', () => {

        console.log(component.debug());
        const wrapper = findDataByAttr(
            component, 'h1'
        )
        expect(wrapper.length).toBe(1);

    })

})
