/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Sidebar from '../../src/app/components/Sidebar/Sidebar.jsx';

describe('Sidebar', () => {
  describe('Default component', () => {
    let component;

    before(() => {
      component = mount(
        <Sidebar />
      );
    });

    it('should be wrapped in .sidebar and .nypl-column-one-quarter classes', () => {
      const sidebarWrapper = component.find('div').at(0);
      expect(sidebarWrapper.hasClass('sidebar')).to.equal(true);
      expect(sidebarWrapper.hasClass('nypl-column-one-quarter')).to.equal(true);
    });

    it('should render a breadcrumb link', () => {
      const breadcrumbLink = component.find('a').at(0);
      expect(breadcrumbLink).to.have.length(1);
      // The first part of the "text" is the hidden SVG title which is not hidden in the tests.
      expect(breadcrumbLink.text()).to.equal('NYPL Left Wedge SVG Icon Recommendations');
      expect(breadcrumbLink.prop('href'))
        .to.equal('https://www.nypl.org/books-music-dvds/recommendations');
    });

    it('should render a <BookFilters /> component', () => {
      expect(component.find('BookFilters')).to.have.length(1);
    });

    it('should render a <About /> component', () => {
      expect(component.find('.about')).to.have.length(1);
    });
  });
});
