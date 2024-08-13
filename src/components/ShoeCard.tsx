import { FC } from 'react';

interface IShoeCardProps extends React.ComponentPropsWithoutRef<'div'> {
  isSelected: boolean;
  src: string;
  onClick: () => void;
}

const ShoeCard: FC<IShoeCardProps> = ({
  isSelected,
  src,
  onClick,
  ...props
}) => {
  const onkeydown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 hover:outline hover:outline-2 hover:outline-coral-red focus-within:outline-coral-red ${
        isSelected ? 'border-coral-red' : 'border-transparent'
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={onkeydown}
      {...props}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={src}
          alt="shoe"
          className="object-contain"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
