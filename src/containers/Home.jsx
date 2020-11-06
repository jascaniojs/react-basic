import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';

import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const Home = ({ myList, trends, originals }) => {
  //const initialState = useInitialState(API);
  return (
    <>
      <Header />

      <Search />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList?.map((info) => (
              <CarouselItem key={info.id} {...info} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      {trends.length > 0 && (
        <Categories title='Tendencias'>
          <Carousel>
            {trends?.map((info) => (
              <CarouselItem key={info.id} {...info} />
            ))}
          </Carousel>
        </Categories>
      )}
      {originals.length > 0 && (
        <Categories title='Originales'>
          <Carousel>
            {originals?.map((info) => (
              <CarouselItem key={info.id} {...info} />
            ))}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
