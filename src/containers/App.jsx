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
    const categories = [
      { title: 'Nueva Lista', items: 3 },
      { title: 'Otra Lista', items: 2 },
      { title: 'Mi Lista', items: 1 },
    ];
    return (
      <div className='App'>
        <Header />
        <Search />
        {categories.map((item) => (
          <Categories title={item.title}>
            <Carousel>
              {[...Array(item.items)].map((res, index) => (
                <CarouselItem key={index} />
              ))}
            </Carousel>
          </Categories>
        ))}

        <Footer />
      </div>
    );
  }
}
