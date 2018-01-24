import React from 'react';
import TestUtils from 'react-addons-test-utils';

import BookDetail from '../../src/containers/book_detail';

describe('BookDetail', () => {
    it('renders when no book is selected', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<BookDetail />);
        const actual = renderer.getRenderOutput();
        const expected = (<div>Select a book...</div>);
        expect(actual).toEqual(expected);
    });
});