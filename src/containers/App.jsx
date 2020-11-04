import React, { Component } from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
      </div>
    );
  }
}
