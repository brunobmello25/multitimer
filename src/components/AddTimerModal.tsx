import { FiPlusCircle } from 'react-icons/fi';
import { useState } from 'react';
import InputMask from 'react-input-mask';

import { useModal, useTimer } from '../hooks';
import { readableTimeToSeconds } from '../utils/time';

const validTimeRegex = /^(([0-9]{2}:)([0-5][0-9]:))([0-5][0-9])$/;

export function AddTimerModal(): JSX.Element {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  console.log({ name, duration });
  const { addTimer } = useTimer();

  const { popModal } = useModal();

  const validDuration = duration.match(validTimeRegex) !== null;

  const validForm = name !== '' && validDuration;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!validForm) {
      alert('Ops! Check entered values and try again');
    }

    addTimer(name, readableTimeToSeconds(duration));

    popModal();
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-gray-600 px-7 py-5">
      <h2 className="text-5xl font-bold text-white">Add timer</h2>

      <form
        onSubmit={handleSubmit}
        className="mt-5 flex w-full flex-col items-center justify-center"
      >
        <label className="flex w-full flex-col items-start justify-start">
          <span className="text-white">Name</span>
          <input
            className="mt-2 w-full rounded-xl bg-gray-500 px-3 py-2 text-white"
            type="text"
            placeholder="Timer name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className="mt-5 flex w-full flex-col items-start justify-start">
          <span className="text-white">Duration</span>
          <InputMask
            className="mt-2 w-full rounded-xl bg-gray-500 px-3 py-2 text-white"
            type="text"
            placeholder="1:59:59"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
            mask="99:99:99"
          />
        </label>
        <button
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-gray-500 px-3 py-2 text-white disabled:opacity-50"
          type="submit"
          disabled={!validForm}
        >
          <FiPlusCircle className="mr-2" />
          Add
        </button>
      </form>
    </div>
  );
}
