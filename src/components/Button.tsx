import { cva, type VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const button = cva('button', {
  variants: {
    variant: {
      primary: ['bg-coral-red', 'text-white', 'border-coral-red'],
      outline: ['bg-white', 'text-slate-gray', 'border-slate-gray', 'hover:bg-gray-100'],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface IButtonProps extends React.ComponentPropsWithoutRef<'button'>, VariantProps<typeof button> {
  label: string;
  iconURL?: string;
  variant?: 'primary' | 'outline';
}

const Button: FC<IButtonProps> = ({ label, iconURL, variant, ...props }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${button({ variant })}`}
      {...props}
    >
      {label}
      {iconURL && <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
