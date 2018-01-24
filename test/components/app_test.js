import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import App from '../../src/components/app';

describe('App' , () => {

  it('renders something', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const output = renderer.getRenderOutput();
    expect(output).toBeDefined;
  });
});
