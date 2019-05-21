import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { RootReduxState } from '../../../redux/reducers';
import { connect } from 'react-redux';
import { ModsWrapper, FormWrapper } from './styles';
import { ModData } from '../types';
import { fetchMods } from '../data/actions';
import ModCard from './ModCard';

interface OwnProps {}

interface StateProps {
  mods: ModData[];
}

interface DispatchProps {
  fetchMods: () => void;
}

type Props = StateProps & DispatchProps;

const Mods = ({ mods, fetchMods }: Props) => {
  useEffect(() => {
    fetchMods();
  }, []);
  const sortedMods = [...mods].sort((modA, modB) => (modA.enabled ? 0 : 1));
  return (
    <ModsWrapper>
      {sortedMods.map((mod, idx) => (
        <ModCard key={idx} mod={mod} />
      ))}
    </ModsWrapper>
  );
};

const mapStateToProps = (state: RootReduxState): StateProps =>
  ({
    mods: state.admin.mods
  } as StateProps);

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ fetchMods } as any, dispatch);

export default connect<StateProps, DispatchProps, {}, RootReduxState>(
  mapStateToProps,
  mapDispatchToProps
)(Mods);
