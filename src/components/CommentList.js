import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  renderComments = () =>
    this.props.comments.map(c =>
      <li key={c}>{c}</li>
    );

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);