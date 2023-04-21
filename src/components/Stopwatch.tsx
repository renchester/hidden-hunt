import { useEffect } from 'react';
import { useTime } from '../hooks/useTime';

type StopwatchProps = {
  isGameStart: boolean;
};

function Stopwatch(props: StopwatchProps) {
  const { isGameStart } = props;
  const { timeLapsed, handleStart, clearStopwatchInterval } = useTime();
  const { hours, minutes, seconds, centiseconds } = timeLapsed;

  useEffect(() => {
    if (isGameStart) {
      handleStart();
    }

    return () => clearStopwatchInterval();
  }, [isGameStart]);

  const formatTime = (timeStr: number) => timeStr.toString().padStart(2, '0');

  return (
    <span className="text-2xl" role="timer" aria-label="Game stopwatch timer">
      {hours > 0 && `${formatTime(hours)}:`}
      {formatTime(minutes)}:{formatTime(seconds)}.{formatTime(centiseconds)}
    </span>
  );
}
export default Stopwatch;
