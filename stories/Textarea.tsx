import React, { TextareaHTMLAttributes } from 'react';
import './textarea.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * What background color to use
   */
  backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Textarea = ({
  backgroundColor,
  ...props
}: TextareaProps) => {
  return (
    <textarea
      {...props}
      className={['storybook-textarea'].join(' ') + ' ' + props?.className}
      style={{ backgroundColor, ...props?.style }}
    />
  );
};
