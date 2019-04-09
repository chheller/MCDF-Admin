import React, { ChangeEvent } from 'react';
import { Input } from '@material-ui/core';
interface IProps {
  onInput(value: string): void;
  value: string;
  type?: string;
}

const TextInput = ({ onInput, value, type, ...props }: IProps) => {
  return (
    <div>
      <Input
        type={type || 'text'}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onInput(event.target.value)}
        {...props}
      />
    </div>
  );
};

export default TextInput;
