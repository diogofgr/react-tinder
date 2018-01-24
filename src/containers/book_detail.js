import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render() {
    if (!this.props.book){
      return <div>Select a book...</div>;
    }
    return (
      <div>
        <h5>Details for:</h5>
        <h3>{this.props.book.title}</h3>
        <p>Author: {this.props.book.author}</p>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
