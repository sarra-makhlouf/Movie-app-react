import React, { Component } from 'react';
import './movieCard.css'
import Rating from './rating';

export default class MovieCard extends Component {
    render() {
        return (
        <div className="card">
            <img src={this.props.movie.picture} alt={this.props.movie.title} className="picture"/>
            <h2 className="title">{this.props.movie.title}</h2>
            <h4 className="date">{this.props.movie.date}</h4>
            <Rating movieRating={this.props.movie.rating}/>
        </div>
    )
  }
}
