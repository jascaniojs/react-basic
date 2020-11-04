import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className='App'>
      <Header />
      <Search />
      {Object.keys(initialState)?.map((categories) => {
        return (
          initialState[categories]?.length > 0 && (
            <Categories title={categories?.toUpperCase()}>
              <Carousel>
                {initialState[categories]?.map((info) => (
                  <CarouselItem key={info.id} {...info} />
                ))}
              </Carousel>
            </Categories>
          )
        );
      })}
      ;
      <Footer />
    </div>
  );
};
export default App;
