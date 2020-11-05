import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Lottie from 'react-lottie-segments';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import useRobotState from '../hooks/useRobotState';
import * as animationRobot from '../assets/lotties/Robot.json';

const API = 'http://localhost:3000/initalState';

const Home = ({ myList, trends, originals }) => {
  //const initialState = useInitialState(API);
  const {
    isStopped = false,
    isPaused,
    direction,
    animationRequest = () => {},
    animationResponse = () => {},
    handlePause = () => {},
    segments = {
      segments: [10, 12],
      forceFlag: true,
    },
  } = useRobotState();
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationRobot,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const startPoint = {
    value: 10,
    isFrame: true,
  };
  console.log({ segments, requested, isStopped });
  return useMemo(() => {
    return (
      <>
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
  }, [
    isPaused,
    isStopped,
    animationRequest,
    animationResponse,
    handlePause,
    direction,
  ]);
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
