import React, { SelectHTMLAttributes, OptionHTMLAttributes } from 'react';
import '../styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}
interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

export const Select = ({
  ...props
}: SelectProps) => {
  return (
    <select
      {...props}
      className={['storybook-input'].join(' ') + ' ' + props?.className}
    >
      {props.children}
    </select>
  );
};

export const Option = ({
  ...props
}: OptionProps) => {
  return (
    <option
      {...props}
    >
      {props.children}
    </option>
  );
};
