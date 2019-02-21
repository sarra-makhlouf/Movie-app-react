import React, { Component } from 'react'

export default class SearchMovie extends Component {
    render() {
        return (
            <div>
                <input placeholder="search..." className="search" onChange={this.props.search} />
            </div>
        )
    }
}
