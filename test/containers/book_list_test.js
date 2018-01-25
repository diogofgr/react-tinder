import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import { BookList } from '../../src/containers/book_list';

describe('BookList', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(
        <BookList books={[]} />
    );
    
    const actual = renderer.getRenderOutput();
    console.log(actual);
    
    it('should have children', () => {
        const children = actual.props.children;
        expect(children).toBeDefined();
    });

    it('should be a <ul> or <ol>', () => {
        const divType = actual.type;
        // expects ul or ol, add more classes separated with |
        const expected = expect.stringMatching(/^(ul|ol){1}$/);
        expect(divType).toEqual(expected);
    });

    it('should have class list-group', () => {
        const classes = actual.props.className;
        // does not account for cases where list-group is
        // followed or preceeded by some string, like:
        // lalalist-group or list-gruoppppp.
        const expected = expect.stringMatching(/(list-group)+/);        
        expect(classes).toEqual(expected);
    });
});