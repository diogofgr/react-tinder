import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

export class BookList extends Component{
  renderList(){
    return this.props.books.map( book => {
      return(
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
          >
            {book.title}
        </li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  // whatever is returned here is available as props
  // in book_list.js
  return { books: state.books };
}

// anything retuned from this function will end up as props
// on the BookList container.
function mapDispatchToProps(dispatch){
  // whenever selectBook is called, the result should be passed
  // to all reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from a component to a container - it needs
// to know about all state and dispatch methods. Make then available as props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
