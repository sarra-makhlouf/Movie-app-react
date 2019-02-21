import React, { Component } from 'react'

export default class Rating extends Component {
  render() {
    return (
      <div>
        <p className="rating">{'★'.repeat(this.props.movieRating).padEnd(5,'☆')}</p>
      </div>
    )
  }
}
