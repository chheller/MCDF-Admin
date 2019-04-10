import React from "react";
import LoginForm from "./LoginForm";
import { css } from "linaria";
import { Location } from "history";
import { IRootState } from "../../redux/reducers";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const wrapper = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

interface IProps {
  isAuthenticated: boolean;
  location: Location;
}
const Login = ({ location, isAuthenticated }: IProps) => {
  const { from } = location.state || "/";
  return (
    <div className={wrapper}>
      {isAuthenticated ? <Redirect to={from} /> : <LoginForm />}
    </div>
  );
};

const mapStateToProps = (state: IRootState): Partial<IProps> => ({
  isAuthenticated: state.login.isAuthenticated
});
export default connect(
  mapStateToProps,
  null
)(Login as any);
