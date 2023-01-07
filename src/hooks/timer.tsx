import { useEffect, useState, createContext, useContext } from 'react';
import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId({ length: 8 });

export const TimerContext = createContext<Value | null>(null);

const LOCAL_STORAGE_KEY = 'multitimer:timers';

export function TimerProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [timers, setTimers] = useState<Timer[]>([]);

  const anyRunning = timers.some((timer) => timer.started && !timer.paused);

  const addTimer = (name: string, duration: number): void => {
    const newTimers = [
      ...timers,
      {
        id: uid(),
        name,
        current: duration,
        default: duration,
        paused: false,
        started: false,
        finished: false,
      },
    ];

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTimers));

    setTimers(newTimers);
  };

  const removeTimer = (id: string): void => {
    const newTimers = timers.filter((timer) => timer.id !== id);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTimers));

    setTimers(newTimers);
  };

  const startTimer = (id: string): void => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === id) {
          return {
            ...timer,
            started: true,
            paused: false,
          };
        }
        return timer;
      }),
    );
  };

  const stopTimer = (id: string): void => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === id) {
          return {
            ...timer,
            current: timer.default,
            started: false,
            paused: false,
            finished: false,
          };
        }
        return timer;
      }),
    );
  };

  const toggleTimerPause = (id: string): void => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === id) {
          return {
            ...timer,
            paused: !timer.paused,
          };
        }
        return timer;
      }),
    );
  };

  useEffect(() => {
    const storedTimers = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedTimers !== null) {
      setTimers(JSON.parse(storedTimers));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!anyRunning) return;

      setTimers((old) =>
        old.map((timer) => {
          if (timer.started && !timer.paused && !timer.finished) {
            const result = {
              ...timer,
              current: timer.current - 1,
            };

            if (result.current === 0) {
              result.finished = true;
            }

            return result;
          }

          return timer;
        }),
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [anyRunning, timers]);

  return (
    <TimerContext.Provider
      value={{
        addTimer,
        removeTimer,
        startTimer,
        stopTimer,
        toggleTimerPause,
        timers,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer(): Value {
  const context = useContext(TimerContext);

  if (context === null) {
    throw new Error('useTimer must be used within a TimerProvider');
  }

  return context;
}

export type Timer = {
  id: string;
  name: string;
  default: number;
  current: number;
  started: boolean;
  paused: boolean;
  finished: boolean;
};

type Value = {
  timers: Timer[];
  addTimer: (name: string, duration: number) => void;
  removeTimer: (id: string) => void;
  startTimer: (id: string) => void;
  stopTimer: (id: string) => void;
  toggleTimerPause: (id: string) => void;
};
