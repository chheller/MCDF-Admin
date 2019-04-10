import React from "react";
import { connect } from "react-redux";

import { IRootState } from "../../redux/reducers";
import { Dispatch, bindActionCreators } from "redux";
import { css } from "linaria";
import axios from "../../util/axios";

const container = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
const ModsSelectView = () => {
  const testAuthn = () => {
    axios.post("/authn/unauthn");
  };
  return (
    <div>
      <div className={container}>
        <div>Mods be Here!</div>
        <button
          onClick={() => {
            testAuthn();
          }}
        >
          Test Auth
        </button>
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
