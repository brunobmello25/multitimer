import type { IconType } from 'react-icons';

type Props = {
  onClick?: () => void;
  size?: number;
  icon: IconType;
};

export function IconButton({
  icon: Icon,
  size = 18,
  onClick,
}: Props): JSX.Element {
  return (
    <button
      className="text-sm text-gray-300 hover:text-white"
      onClick={onClick}
    >
      <Icon size={size} />
    </button>
  );
}
