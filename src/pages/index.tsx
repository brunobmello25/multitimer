import { type NextPage } from 'next';
import { TimerCard } from '../components';

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gray-600">
      <div className="container flex h-full flex-col items-center justify-start gap-10 p-4">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-[5rem]">
          Multitimer
        </h1>

        <div
          className="grid h-full w-full items-start justify-center gap-2 overflow-y-scroll"
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
      </div>
    </main>
  );
};

export default Home;
