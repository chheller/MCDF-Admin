import { styled } from 'linaria/react';

export const FormContainer = styled.div`
  display: flex-inline;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 350px;
  height: 250px;
  box-shadow: 5px 8px 5px 5px grey;
  margin: auto;
`;

export const FormContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  margin: auto;
`;
export const InputWrapper = styled.div`
  margin: auto;
  margin-bottom: 15px;
`;

export const Title = styled.h3`
  margin-left: 15px;
`;
