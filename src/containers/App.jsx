import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Search />
        <Categories titleCategorie='Nueva Lista'>
          <Carousel>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </Carousel>
        </Categories>
        <Footer />
      </div>
    );
  }
}
