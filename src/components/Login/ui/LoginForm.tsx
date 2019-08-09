import { Button, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ThunkResult } from '../../../redux';
import TextInput from '../../_shared/Inputs/TextInput';
import { login } from '../data/redux/actions';
const styles = require('./styles.css');

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
    <div className={styles.formContainer}>
      <h3 className={styles.title}>MCDF Administrator Login</h3>
      <div className={styles.formContent}>
        <div className={styles.inputWrapper}>
          <InputLabel>Username:</InputLabel>
          <TextInput value={username} onInput={setUsername} />
        </div>
        <div>
          <InputLabel>Password:</InputLabel>
          <TextInput value={password} onInput={setPassword} type="password" />
        </div>
        <div className={styles.inputWrapper}>
          <Button type="submit" onClick={submitLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators({ login }, dispatch);
};
export default connect<Props, DispatchProps, OwnProps>(
  null,
  mapDispatchToProps
)(LoginForm as any);
