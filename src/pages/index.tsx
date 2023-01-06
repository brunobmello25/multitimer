import { type NextPage } from 'next';
import { FiPlusCircle } from 'react-icons/fi';
import { AddTimerModal, Header, TimerCard } from '../components';
import { useModal, useTimer } from '../hooks';

const Home: NextPage = () => {
  const { timers } = useTimer();
  const { pushModal } = useModal();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-600">
      <Header />
      <main className="flex h-full w-full flex-1 flex-col items-center justify-start overflow-y-auto px-4 pt-4">
        <div
          className="grid w-full justify-center gap-2"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, 350px)',
            gridTemplateRows: 'max-content',
          }}
        >
          {timers.map((timer) => (
            <TimerCard key={timer.id} timer={timer} />
          ))}
          <button
            className="flex min-h-[180px] items-center justify-center rounded-xl border-8 border-gray-500 bg-gray-600"
            onClick={() => {
              pushModal(<AddTimerModal />);
            }}
          >
            <FiPlusCircle className="text-gray-500" size={40} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
