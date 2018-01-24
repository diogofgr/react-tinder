import store from './test_helper';
import expect from 'expect';

describe('store', () => {
    it('should have no book selected by default', () => {
        store.dispatch({
            type: 'BOOK_SELECTED',
            payload: {}
        });

        const actual = store.getState().activeBook;
        const expected = {};
        expect(actual).toEqual(expected);
    });

    it('should be able to select a book from the list', () => {
        const expected = store.getState().books[0];

        store.dispatch({
            type: 'BOOK_SELECTED',
            payload: expected
        });
        const actual = store.getState().activeBook;

        expect(actual).toHaveProperty('author');
        expect(actual).toHaveProperty('pages');
        expect(actual).toHaveProperty('title');
    });
});