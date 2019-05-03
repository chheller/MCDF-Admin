import { Button, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ThunkResult } from '../../redux';
import TextInput from '../_shared/Inputs/TextInput';
import { login } from './data/redux/actions';
import { FormContainer, FormContents, InputWrapper, Title } from './styles';

interface OwnProps {}
interface DispatchProps {
  login(username: string, password: string): ThunkResult<Promise<void>>;
}

type Props = OwnProps & DispatchProps;
const LoginForm = ({ login }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    // TODO: Validate username, password
    return true;
  };

  const submitLogin = () => {
    login(username, password);
  };

  return (
    <FormContainer>
      <Title>MCDF Administrator Login</Title>
      <FormContents>
        <InputWrapper>
          <InputLabel>Username:</InputLabel>
          <TextInput value={username} onInput={setUsername} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>Password:</InputLabel>
          <TextInput value={password} onInput={setPassword} type="password" />
        </InputWrapper>
        <InputWrapper>
          <Button type="submit" onClick={submitLogin}>
            Login
          </Button>
        </InputWrapper>
      </FormContents>
    </FormContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators({ login }, dispatch);
};
export default connect<Props, DispatchProps, OwnProps>(
  null,
  mapDispatchToProps
)(LoginForm as any);
