import React from "react";
import { connect } from "react-redux";

import { IRootState } from "../../redux/reducers";
import { Dispatch, bindActionCreators } from "redux";
import { css } from "linaria";
import axios from "../../util/axios";

interface IProps {
  mods: string[];
}

const ModsSelectView = ({ mods }: IProps) => {
  const testAuthn = () => {
    axios.post("/authn/unauthn");
  };
  return (
    <div>
      <div>
        <div>Mods be Here!</div>
        <ul>{}</ul>
        <button onClick={() => testAuthn()}> TEST AUTH</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {};
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ ...{} } as any, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModsSelectView);
