import React from 'react'
import { shallow } from 'enzyme';
import Header from './index';
import { findDataByAttr } from '../../Utils/index';

export const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};
describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('It should render without errors', () => {

        console.log(component.debug());
        const wrapper = findDataByAttr(
            component, 'headerComponent'
        )
        expect(wrapper.length).toBe(1);

    })
    it('It should render a logo', () => {
        const component = setUp();
        console.log(component.debug());
        const logo = component.find('.logo');
        expect(logo.length).toBe(1);

    })
    it('It should render a logoImg', () => {
        const component = setUp();
        console.log(component.debug());
        const logoIMG = findDataByAttr(
            component, 'logoIMG'
        )
        expect(logoIMG.length).toBe(1);

    })
})
