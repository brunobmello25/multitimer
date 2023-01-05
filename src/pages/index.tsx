import { type NextPage } from 'next';
import { Header, TimerCard } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex h-full flex-col items-center justify-start bg-gray-600">
        <div
          className="grid h-full w-full items-start justify-center gap-2 p-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, 350px)',
          }}
        >
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
          <TimerCard />
        </div>
      </main>
    </>
  );
};

export default Home;
