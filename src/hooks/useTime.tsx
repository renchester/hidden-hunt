import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from 'react';
import type { TimeLapsed } from '../types/types';
import getTime from '../utils/getTime';

type TimeProviderProps = {
  children: ReactNode;
};

type TimeContextType = {
  timeLapsed: TimeLapsed;
  setTimeLapsed: React.Dispatch<React.SetStateAction<TimeLapsed>>;
  handleStart: () => void;
  clearStopwatchInterval: () => void;
};

const TimeLapsedContext = createContext<TimeContextType | null>(null);

export const TimeLapsedProvider = (props: TimeProviderProps) => {
  const { children } = props;
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);

  const [timeLapsed, setTimeLapsed] = useState<TimeLapsed>({
    actualTime: 0,
    centiseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 10);

    intervalRef.current = intervalId;
  };

  const clearStopwatchInterval = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (startTime && now) {
      const timePassed = now - startTime;
      const timeToFormat = getTime(timePassed);

      setTimeLapsed({
        actualTime: timePassed,
        hours: timeToFormat.hours,
        minutes: timeToFormat.minutes,
        seconds: timeToFormat.seconds,
        centiseconds: timeToFormat.centiseconds,
      });
    }
  }, [startTime, now]);

  return (
    <TimeLapsedContext.Provider
      value={{ handleStart, clearStopwatchInterval, timeLapsed, setTimeLapsed }}
    >
      {children}
    </TimeLapsedContext.Provider>
  );
};

export const useTime = () => {
  const context = useContext(TimeLapsedContext);

  if (context === null || context === undefined) {
    throw new Error('useTime must be used within the TimeLapsedProvider');
  }

  return context;
};
