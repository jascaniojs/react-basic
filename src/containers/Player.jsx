import React, { useEffect, useLayoutEffect } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

const Player = (props) => {
  const {
    match: {
      params: { id },
    },
    playing,
    getVideoSource = () => {},
  } = props;

  useEffect(() => {
    getVideoSource(id);
  }, []);

  const hasPlaying = Object.keys(playing).length > 0;
  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src='' type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return { playing: state.playing };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
