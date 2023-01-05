import { FiPlusCircle } from 'react-icons/fi';

export function AddTimerModal(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-gray-600 px-7 py-5">
      <h2 className="text-5xl font-bold text-white">Add timer</h2>

      <form className="mt-5 flex w-full flex-col items-center justify-center">
        <label className="flex w-full flex-col items-start justify-start">
          <span className="text-white">Name</span>
          <input
            className="mt-2 w-full rounded-xl bg-gray-500 px-3 py-2 text-white"
            type="text"
          />
        </label>
        <label className="mt-5 flex w-full flex-col items-start justify-start">
          <span className="text-white">Duration</span>
          <input
            className="mt-2 w-full rounded-xl bg-gray-500 px-3 py-2 text-white"
            type="text"
          />
        </label>
        <button
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-gray-500 px-3 py-2 text-white"
          type="submit"
        >
          <FiPlusCircle className="mr-2" />
          Add
        </button>
      </form>
    </div>
  );
}
