import React from 'react';
import TestUtils from 'react-addons-test-utils';

import BookList from '../../src/containers/book_list';

describe('BookList', () => {
    it("should render a list", () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<BookList />);

        const actual = renderer.getRenderOutput();
        const expected = (<ul></ul>);
        expect(actual).toEqual(expected);
    });
});