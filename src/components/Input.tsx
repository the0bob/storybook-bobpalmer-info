import React, { InputHTMLAttributes } from 'react';
import '../styles.css';

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
  color,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={['storybook-input'].join(' ') + ' ' + props?.className}
      style={{ backgroundColor, color, ...props?.style }}
    />
  );
};
