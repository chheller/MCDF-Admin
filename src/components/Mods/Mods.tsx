import React from "react";
import ModsSelectView from "./ModsSelectView";
import { bindActionCreators, Dispatch } from "redux";
import { IRootState } from "../../redux/reducers";
import { connect } from "react-redux";
import { ModsWrapper } from "./styles";

const Mods = () => {
  return (
    <ModsWrapper>
      <ModsSelectView mods={[]} />
      <ModsSelectView mods={[]} />
    </ModsWrapper>
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
