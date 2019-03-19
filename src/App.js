import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Feed from './components/Feed';
import './App.css'

export default class App extends Component {
  state = {
    url: 'https://stream.twitter.com/1.1/statuses/filter.json?track=',
    keywords: '',
    results: []
  }

  handleChange = (e) => {
    this.setState({
      keywords: e.target.value
    })
  }

  handleSubmit = (keywords) => {
    let search = keywords.trim().split(' ').join('');
    fetch(`${this.state.url}${search}`)
    .then(data => data.json())
    .then(json => {
      this.setState({
        results: json
      })
      console.log(json)
    })
    .catch(err => err.message);
  }

  render() {
    return (
      <div >
        <Header />
        <Search 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          value={this.state.keywords}
        />
        <Feed />
      </div>
    );
  }
}
