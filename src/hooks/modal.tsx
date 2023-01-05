import { useContext, createContext, useState } from 'react';
import type { ReactNode } from 'react';
import { ModalContainer } from '../components';

type Value = {
  pushModal: (modal: ReactNode) => void;
  popModal: () => void;
  activeModal: () => ReactNode | undefined;
};

export const ModalContext = createContext<Value | null>(null);

export function ModalProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [modalStack, setModalStack] = useState<ReactNode[]>([]);

  function pushModal(modal: ReactNode): void {
    setModalStack([...modalStack, modal]);
  }

  function popModal(): void {
    setModalStack(modalStack.slice(0, -1));
  }

  function activeModal(): ReactNode | undefined {
    return modalStack[modalStack.length - 1];
  }

  return (
    <ModalContext.Provider value={{ pushModal, popModal, activeModal }}>
      {children}
      {activeModal() != null ? (
        <ModalContainer>{activeModal()}</ModalContainer>
      ) : null}
    </ModalContext.Provider>
  );
}

export function useModal(): Value {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}
