import { FiTrash2 } from 'react-icons/fi';
import type { Timer } from '../hooks';
import { useTimer } from '../hooks';
import { Button, IconButton } from './';

export function TimerCard({ timer }: Props): JSX.Element {
  const { removeTimer, toggleTimerPause, stopTimer, startTimer } = useTimer();

  const hours = Math.floor(timer.current / 3600);
  const minutes = Math.floor((timer.current % 3600) / 60);
  const seconds = Math.floor(timer.current % 60);

  return (
    <div className="flex flex-col rounded-xl bg-gray-500 p-3 text-white">
      <div className="col-start-3 col-end-3 flex justify-end gap-x-2">
        <IconButton
          icon={FiTrash2}
          onClick={() => {
            removeTimer(timer.id);
          }}
        />
      </div>

      <div className="p-2">
        <h3 className="col-start-1 col-end-3 text-center text-3xl font-bold">
          {timer.name}
        </h3>
      </div>

      <div className="text-center text-3xl">
        {hours > 0 && `${String(hours).padStart(2, '0')}:`}
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>

      <div className="flex items-center justify-center gap-3 p-3">
        {timer.started && !timer.paused && (
          <>
            <Button
              onClick={() => {
                toggleTimerPause(timer.id);
              }}
            >
              Pause
            </Button>
            <Button
              onClick={() => {
                stopTimer(timer.id);
              }}
            >
              Stop
            </Button>
          </>
        )}

        {timer.started && timer.paused && (
          <>
            <Button
              onClick={() => {
                toggleTimerPause(timer.id);
              }}
            >
              Resume
            </Button>
            <Button
              onClick={() => {
                stopTimer(timer.id);
              }}
            >
              Stop
            </Button>
          </>
        )}

        {!timer.started && (
          <Button
            onClick={() => {
              startTimer(timer.id);
            }}
          >
            Start
          </Button>
        )}
      </div>
    </div>
  );
}

type Props = {
  timer: Timer;
};
