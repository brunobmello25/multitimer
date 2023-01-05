import type { PropsWithChildren, ReactNode } from 'react';
import { useModal } from '../hooks';

export function ModalContainer({
  children,
}: PropsWithChildren<{ children: ReactNode | undefined }>): JSX.Element {
  const { popModal } = useModal();

  function handleClick(e: React.MouseEvent<HTMLDivElement>): void {
    if (e.target === e.currentTarget) {
      popModal();
    }
  }

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
    >
      {children}
    </div>
  );
}
