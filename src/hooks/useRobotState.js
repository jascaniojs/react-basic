import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useRobotState = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [requested, setRequested] = useState(false);
  const [direction, setDirection] = useState(1);
  const [segments, setSegments] = useState({
    segments: [10, 12],
    forceFlag: false,
  });
  // const requested = useSelector((store) => store.requested);

  const animationRequest = useCallback(() => {
    if (requested) {
      //setDirection(direction * -1);
      return setSegments({ segments: [83, 10], forceFlag: false });
    }
    return setSegments({ segments: [10, 20], forceFlag: false });
  }, [requested]);

  const animationResponse = useCallback(() => {
    if (!requested) setRequested(true);
    return setSegments({ segments: [20, 83], forceFlag: true });
  }, [requested]);

  const handlePause = useCallback(() => {
    setIsPaused(!isPaused);
  }, [isPaused]);

  /*
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  */
  return {
    isPaused,
    isStopped,
    animationRequest,
    animationResponse,
    direction,
    segments,
    requested,
  };
};
export default useRobotState;
