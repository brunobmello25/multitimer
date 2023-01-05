import { type NextPage } from 'next';
import { Header, TimerCard } from '../components';
import { useTimer } from '../hooks';

const Home: NextPage = () => {
  const { timers } = useTimer();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-600">
      <Header />
      <main className="flex h-full w-full flex-1 flex-col items-center justify-start overflow-y-auto px-4 pt-4">
        <div
          className="grid h-full w-full items-start justify-center gap-2"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, 350px)',
          }}
        >
          {timers.map((timer) => (
            <TimerCard key={timer.id} value={timer.current} name={timer.name} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
