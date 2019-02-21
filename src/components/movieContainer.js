import React, { Component } from 'react'
import MovieList from './movieList';
import SearchMovie from './searchMovie';
import SearchRating from './searchRating';
import FightClub from '../pictures/fight club.jpg';
import Snatch from '../pictures/snatch.jpg';
import Vendetta from '../pictures/v for vendetta.jpg';
import WallE from '../pictures/wall-e.jpg';
import './movieContainer.css'

const movies = [
  {
    picture: `${FightClub}`,
    title: 'Fight Club',
    date: '1999',
    rating: 5
  },
  {
    picture: `${Snatch}`,
    title: 'Snatch',
    date: '2000',
    rating: 4
  },
  {
    picture: `${Vendetta}`,
    title: 'V for Vendetta',
    date: '2005',
    rating: 5
  },
  {
    picture: `${WallE}`,
    title: 'WALL-E',
    date: '2008',
    rating: 4
  }
]

export default class MovieContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieadded: movies,
      picture: '',
      title: '',
      date: '',
      rating: '',
      searchText: '',
      stars: 0
    }
  }
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  newMovie = () => {
    this.setState({
      movieadded: [
        ...this.state.movieadded,
        {
          picture: this.state.picture,
          title: this.state.title,
          date: this.state.date,
          rating: this.state.rating
        }],
    })
  }
  searchMovie = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }
  rater = (clicked) => {
    this.setState({
      stars: clicked
    })
  }
  render() {
    return (

      <div className="container">
        <div className="search-bar">
          <SearchRating rate={this.state.stars} starClicked={this.rater} />
          <SearchMovie search={this.searchMovie} />
        </div>
        <MovieList list={this.state.movieadded.filter(movie => movie.rating >= this.state.stars).filter(el => el.title.toLowerCase().includes(this.state.searchText.toLowerCase()))} change={this.changeInput} new={this.newMovie} rating={this.state.rating} />
      </div>
    )
  }
}
