import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Button, IconButton } from './';

export function TimerCard(): JSX.Element {
  return (
    <div className="flex flex-col rounded-xl bg-gray-500 p-3 text-white">
      <div className="col-start-3 col-end-3 flex justify-end gap-x-2">
        <IconButton icon={FiEdit} />
        <IconButton icon={FiTrash2} />
      </div>

      <div className="p-2">
        <h3 className="col-start-1 col-end-3 text-center text-3xl font-bold">
          Timer 1
        </h3>
      </div>

      <div className="text-center text-3xl">00:00</div>

      <div className="flex items-center justify-center gap-3 p-3">
        <Button>Start</Button>
        <Button>Stop</Button>
      </div>
    </div>
  );
}
