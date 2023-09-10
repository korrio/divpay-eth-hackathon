import React, { FC, ReactNode } from 'react';
import { Switch as HeadlessUiSwitch } from '@headlessui/react';
import clsx from 'clsx';

type SwitchColor = 'default' | 'gradient';

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'xs' | 'sm' | 'md';
  color?: SwitchColor;
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
  id?: string;
};

const COLOR = {
  default: (checked: boolean) => (checked ? 'bg-slate-100' : 'bg-slate-100'),
  gradient: (checked: boolean) => (checked ? 'bg-gradient-to-r from-blue to-pink' : 'bg-slate-700'),
};

const HEIGHT = {
  xs: 20,
  sm: 28,
  md: 36,
};

const WIDTH = {
  xs: 49,
  sm: 57,
  md: 65,
};

export const Switch: FC<SwitchProps> = ({
  size = 'md',
  color = 'default',
  checked,
  onChange,
  checkedIcon,
  uncheckedIcon,
  id,
}: SwitchProps) => {
  const height = HEIGHT[size];
  const width = WIDTH[size];
  return (
    <HeadlessUiSwitch
      checked={checked}
      onChange={onChange}
      className={clsx(
        checked ? 'bg-brand' : 'bg-brand',
        `relative inline-flex flex-shrink-0 cursor-pointer items-center rounded-full duration-200 ease-in-out ${id}`
      )}
      style={{ height, width }}
    >
      <span
        className={clsx(
          checked ? 'translate-x-[32px]' : 'translate-x-[2px]',
          COLOR[color](checked),
          `pointer-events-none inline-flex items-center justify-center rounded-full p-1 transition-colors duration-200 ease-in-out`
        )}
        style={{ height: height - 6, width: height - 6, transform: `translate(${checked ? 30 : 2}, 0)` }}
      >
        {checked ? checkedIcon : uncheckedIcon}
      </span>
    </HeadlessUiSwitch>
  );
};

export default Switch;
