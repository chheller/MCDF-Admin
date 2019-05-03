import React, { useEffect } from 'react';
import ModsSelectView from './ModsSelectView';
import { bindActionCreators, Dispatch } from 'redux';
import { IRootState } from '../../redux/reducers';
import { connect } from 'react-redux';
import { ModsWrapper } from './styles';
import { ModData } from './types';
import { fetchMods } from './data/redux/actions';

interface OwnProps {
  mods: ModData[];
}

interface OwnState {}

interface ReduxProps {
  mods: ModData[];
}

interface DispatchProps {
  fetchMods: () => void;
}

type Props = OwnProps & ReduxProps & DispatchProps;

const Mods = ({ mods, fetchMods }: Props) => {
  const disabledMods = mods.filter(mod => mod.disabled);
  const activeMods = mods.filter(mod => !mod.disabled);

  useEffect(() => {
    fetchMods();
  }, []);
  return (
    <ModsWrapper>
      <ModsSelectView mods={disabledMods} />
      <ModsSelectView mods={activeMods} />
    </ModsWrapper>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    mods: state.mods.mods
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ fetchMods } as any, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mods);
