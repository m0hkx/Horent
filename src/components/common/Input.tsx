import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          placeholder="Search any thing you want..." 
          ref={ref}
          className={`
            ml-auto w-[90%] rounded-full 
            bg-transparent border-none 
            focus:outline-none focus:ring-0
            px-[0.5vw] 
            font-lufga font-normal
            text-text-primary placeholder:text-text-muted
            max-2xl:text-sm
            transition-colors duration-200
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-warning text-xs mt-1 ml-4 font-lufga">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
