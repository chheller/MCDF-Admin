import React, { useState, StatelessComponent } from 'react';
import TextInput from '../shared/Inputs/TextInput';
import { InputLabel, Button } from '@material-ui/core';
import { FormContainer, Title, FormContents, InputWrapper } from './styles';
import { connect } from 'react-redux';
import * as LoginActions from './redux/actions';
import { Dispatch, bindActionCreators } from 'redux';
import { ThunkResult } from '../../redux';

interface IProps {
  fetchToken(username: string, password: string): ThunkResult<Promise<void>>;
}
const LoginForm = ({ fetchToken }: IProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    // TODO: Validate username, password
    return true;
  };

  const submitLogin = () => {
    fetchToken(username, password);
  };

  return (
    <div>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): Partial<IProps> => {
  return bindActionCreators({ ...(LoginActions as any) }, dispatch);
};
export default connect(
  null,
  mapDispatchToProps
)(LoginForm as any);
