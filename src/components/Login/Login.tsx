import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import { Location } from 'history';
import { IRootState } from '../../redux/reducers';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { LoginFormWrapper } from './styles';
import { bindActionCreators, Dispatch } from 'redux';
import { refreshAuthentication } from './data/redux/actions';

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
    <LoginFormWrapper>{isAuthenticated ? <Redirect to={from} /> : <LoginForm />}</LoginFormWrapper>
  );
};

const mapStateToProps = (state: IRootState): Partial<IProps> => ({
  isAuthenticated: state.login.isAuthenticated
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<IProps> =>
  bindActionCreators({ refreshAuthentication }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login as any);
