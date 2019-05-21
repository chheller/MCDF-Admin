import { Route, Redirect, RouteProps } from 'react-router-dom';
import { RootReduxState } from '../../../redux/reducers';
import { connect } from 'react-redux';
import React, { ComponentType } from 'react';

interface IProps extends RouteProps {
  isAuthenticated: boolean;
  component: any;
}

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }: IProps) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state: RootReduxState): Partial<IProps> => ({
  isAuthenticated: state.login.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute as any) as ComponentType<Partial<IProps>>;
