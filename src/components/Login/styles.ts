import { styled } from 'linaria/react';

export const FormContainer = styled.div`
  width: 350px;
  height: 750px;
  max-height: calc(100vh - 40px);
  box-sizing: border-box;
  box-shadow: 5px 8px 5px 5px grey;
  overflow: auto;
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
