import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import { Location } from "history";
import { IRootState } from "../../redux/reducers";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { LoginFormWrapper } from "./styles";
import axios from "../../util/axios";
import { bindActionCreators, Dispatch } from "redux";
import * as LoginActions from "./redux/actions";

interface IProps {
  isAuthenticated: boolean;
  location: Location;
  login(token: string): void;
}
const Login = ({ location, isAuthenticated, login }: IProps) => {
  const { from } = location.state || "/";

  const fetchClaimToken = async () => {
    const response = await axios.post<string>("/authn/refresh");
    login(response.data);
  };

  useEffect(() => {
    fetchClaimToken();
  }, []);

  return (
    <LoginFormWrapper>
      {isAuthenticated ? <Redirect to={from} /> : <LoginForm />}
    </LoginFormWrapper>
  );
};

const mapStateToProps = (state: IRootState): Partial<IProps> => ({
  isAuthenticated: state.login.isAuthenticated
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<IProps> =>
  bindActionCreators({ ...(LoginActions as any) }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login as any);
