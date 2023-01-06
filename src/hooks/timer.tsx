import { useEffect, useState, createContext, useContext } from 'react';
import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId({ length: 8 });

export const TimerContext = createContext<Value | null>(null);

export function TimerProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [timers, setTimers] = useState<Timer[]>([]);

  const addTimer = (name: string, duration: number): void => {
    setTimers([
      ...timers,
      {
        id: uid(),
        name,
        current: duration,
        default: duration,
        isPaused: false,
        isStarted: false,
      },
    ]);
  };

  const removeTimer = (id: string): void => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  const startTimer = (id: string): void => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === id) {
          return { ...timer, isStarted: true };
        }
        return timer;
      }),
    );
  };

  const pauseTimer = (id: string): void => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === id) {
          return { ...timer, isPaused: true };
        }
        return timer;
      }),
    );
  };

  const resumeTimer = (id: string): void => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === id) {
          return { ...timer, isPaused: false };
        }
        return timer;
      }),
    );
  };

  const resetTimer = (id: string): void => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === id) {
          return { ...timer, current: timer.default };
        }
        return timer;
      }),
    );
  };

  // TODO: fix this broken use effect
  /* useEffect(() => { */
  /*   const interval = setInterval(() => { */
  /*     setTimers( */
  /*       timers.map((timer) => { */
  /*         if (timer.isStarted && !timer.isPaused) { */
  /*           return { ...timer, current: timer.current - 1 }; */
  /*         } */
  /*         return timer; */
  /*       }), */
  /*     ); */
  /*   }, 1000); */
  /*   return () => { */
  /*     clearInterval(interval); */
  /*   }; */
  /* }, [timers]); */

  return (
    <TimerContext.Provider
      value={{
        addTimer,
        pauseTimer,
        removeTimer,
        resetTimer,
        resumeTimer,
        startTimer,
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
  isStarted: boolean;
  isPaused: boolean;
};

type Value = {
  timers: Timer[];
  addTimer: (name: string, duration: number) => void;
  removeTimer: (id: string) => void;
  startTimer: (id: string) => void;
  pauseTimer: (id: string) => void;
  resumeTimer: (id: string) => void;
  resetTimer: (id: string) => void;
};
