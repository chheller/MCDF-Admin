import React from 'react';
import { connect } from 'react-redux';

import { IRootState } from '../../../redux/reducers';
import { Dispatch, bindActionCreators } from 'redux';
import { css } from 'linaria';
import { ModData } from '../types';

interface OwnProps {
  mods: ModData[];
}

interface OwnState {}

interface ReduxProps {}

interface DispatchProps {}

type Props = OwnProps & ReduxProps & DispatchProps;

const ModsSelectView = ({ mods }: Props) => {
  const renderMod = (mod: ModData) => {
    return <li>{mod.name}</li>;
  };

  return (
    <div>
      <div>
        <div>Mods be Here!</div>
        <ul>{mods.map(renderMod)}</ul>
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
