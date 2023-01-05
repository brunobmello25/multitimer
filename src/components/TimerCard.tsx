import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Button, IconButton } from './';

export function TimerCard({ name, value }: Props): JSX.Element {
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = Math.floor(value % 60);

  return (
    <div className="flex flex-col rounded-xl bg-gray-500 p-3 text-white">
      <div className="col-start-3 col-end-3 flex justify-end gap-x-2">
        <IconButton icon={FiEdit} />
        <IconButton icon={FiTrash2} />
      </div>

      <div className="p-2">
        <h3 className="col-start-1 col-end-3 text-center text-3xl font-bold">
          {name}
        </h3>
      </div>

      <div className="text-center text-3xl">
        {hours > 0 && `${String(hours).padStart(2, '0')}:`}
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>

      <div className="flex items-center justify-center gap-3 p-3">
        <Button>Start</Button>
        <Button>Stop</Button>
      </div>
    </div>
  );
}

type Props = {
  name: string;
  value: number;
};
