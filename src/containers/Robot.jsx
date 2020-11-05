import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Lottie from 'react-lottie-segments';
import { useSelector, useDispatch } from 'react-redux';
import { request } from '../actions';
import '../assets/styles/App.scss';
import useRobotState from '../hooks/useRobotState';
import * as animationRobot from '../assets/lotties/Robot.json';

const API = 'http://localhost:3000/initalState';

const Robot = (props) => {
  //const initialState = useInitialState(API);
  const {
    isStopped = false,
    isPaused,
    direction,
    animationRequest = () => {},
    animationResponse = () => {},
    handlePause = () => {},
    segments,
    requested,
    showAnswer,
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

  const requestJoke = () => {
    const { request } = props;
    animationResponse();
    //request();
  };
  //        {showAnswer && <div className='answer' alt='' />}

  return useMemo(() => {
    return (
      <div className='robot__panel'>
        <h2 className='main__title'>Pick a joke, an advice, or both</h2>
        <Lottie
          options={defaultOptions}
          height={450}
          width={1112}
          isStopped={isStopped}
          isPaused={isPaused}
          goToAndStop={startPoint}
          playSegments={segments}
          direction={direction}
        />
        <div className='buttons'>
          <button onClick={animationRequest} type='button' className='button'>
            Request
          </button>
          <button onClick={animationResponse} type='button' className='button'>
            Response
          </button>
        </div>
      </div>
    );
  }, [
    isPaused,
    isStopped,
    animationRequest,
    animationResponse,
    handlePause,
    requested,
    direction,
  ]);
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  request,
};
export default connect(mapStateToProps, mapDispatchToProps)(Robot);
