import React from 'react';
import clsx from 'clsx';

export interface CheckboxProps {
  set?: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  set,
  className = '',
  checked,
  ...rest
}: CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <div className='relative flex items-center justify-center'>
      <input
        type='checkbox'
        onChange={(event) => (set ? set(event.target.checked) : null)}
        className={clsx(
          'h-6 w-6 cursor-pointer appearance-none rounded-[4px] border border-slate-700 bg-slate-900 checked:border-[3px] checked:bg-gradient-to-r checked:from-blue-600 checked:to-pink-600 disabled:border-indigo-500 disabled:bg-slate-900',
          { className }
        )}
        checked={checked}
        {...rest}
      />
    </div>
  );
};

export default Checkbox;
