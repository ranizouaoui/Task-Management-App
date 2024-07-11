import { ButtonHTMLAttributes, FC } from 'react';
import { FaSave } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: JSX.Element;
}

const Button: FC<ButtonProps> = ({ text, icon, ...props }) => {
  return (
    <button
      {...props}
      className="w-full bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
