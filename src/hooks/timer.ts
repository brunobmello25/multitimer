import { useEffect, useState } from 'react';
import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId({ length: 8 });

export function useTimer(): Value {
  const [timers, setTimers] = useState<Timer[]>([]);

  const addTimer = (name: string, value: number): void => {
    setTimers([
      ...timers,
      {
        id: uid(),
        name,
        current: value,
        default: value,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(
        timers.map((timer) => {
          if (timer.isStarted && !timer.isPaused) {
            return { ...timer, current: timer.current - 1 };
          }
          return timer;
        }),
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timers]);

  return {
    addTimer,
    pauseTimer,
    removeTimer,
    resetTimer,
    resumeTimer,
    startTimer,
    timers,
  };
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
  addTimer: (timer: Timer) => void;
  removeTimer: (id: string) => void;
  startTimer: (id: string) => void;
  pauseTimer: (id: string) => void;
  resumeTimer: (id: string) => void;
  resetTimer: (id: string) => void;
};
