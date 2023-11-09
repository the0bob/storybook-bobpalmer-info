import React, { InputHTMLAttributes } from 'react';
import './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  backgroundColor,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={['storybook-input'].join(' ') + ' ' + props?.className}
      style={{ backgroundColor, ...props?.style }}
    />
  );
};
