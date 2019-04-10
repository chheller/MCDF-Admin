import React from "react";
import ModsSelectView from "./ModsSelectView";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../redux/reducers";
import { connect } from "react-redux";

const Mods = () => {
  return (
    <div>
      <ModsSelectView />
      <ModsSelectView />
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
)(Mods);
