import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import { Location } from 'history';
import { RootReduxState } from '../../../redux/reducers';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { refreshAuthentication } from '../data/redux/actions';
const styles = require('./styles.css');

interface IProps {
  isAuthenticated: boolean;
  location: Location;
  refreshAuthentication: () => void;
}

const Login = ({ location, isAuthenticated, refreshAuthentication }: IProps) => {
  const { from } = location.state || '/';

  useEffect(() => {
    refreshAuthentication();
  }, []);
  return (
    <div className={styles.loginFromWrapper}>
      {isAuthenticated ? <Redirect to={from} /> : <LoginForm />}
    </div>
  );
};

const mapStateToProps = (state: RootReduxState): Partial<IProps> => ({
  isAuthenticated: state.login.isAuthenticated
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<IProps> =>
  bindActionCreators({ refreshAuthentication }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login as any);
