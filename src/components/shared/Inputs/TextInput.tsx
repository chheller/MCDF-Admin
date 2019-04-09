import React from "react";
import { styled } from "linaria/react";
const TextInput = ({ onInput }: { onInput: (value: string) => void }) => {
  const Input = styled.input`
    border-radius: 5px;
  `;
  return (
    <div>
      <Input type="text" onChange={event => onInput(event.target.value)} />
    </div>
  );
};

export default TextInput;
