import type { PropsWithChildren } from 'react';

interface Props {
  onClick?: () => void;
}

export function Button({
  children,
  onClick,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <button
      type="button"
      className="rounded-xl bg-gray-600 py-3 px-4 text-lg font-semibold hover:bg-gray-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
