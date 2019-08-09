import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { RootReduxState } from '../../../redux/reducers';
import { connect } from 'react-redux';
import { ModData } from '../types';
import { fetchMods } from '../data/actions';
import ModCard from './ModCard';
import styles from './styles.module.css';
import {
  CardContent,
  CardHeader,
  Card,
  List,
  ListItem,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanel,
  Divider,
  Typography,
  ExpansionPanelActions,
  Button
} from '@material-ui/core';
import { ExpandMore, Warning } from '@material-ui/icons';

interface StateProps {
  mods: ModData[];
  stagedMods: ModData[];
}

interface DispatchProps {
  fetchMods: () => void;
}

type Props = StateProps & DispatchProps;

const Mods = ({ mods, fetchMods, stagedMods }: Props) => {
  useEffect(() => {
    fetchMods();
  }, []);
  const sortedMods = [...mods].sort(modA => (modA.enabled ? 0 : 1));

  const commitChanges = () => {};
  return (
    <Card className={styles.card}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="title"
            component="span"
            color={'textPrimary'}
            style={{ marginRight: 15 }}
          >
            Configure Mods
          </Typography>
          <Typography variant="subtitle1" color={'textSecondary'} component="span">
            Active mods: {mods.length} Staged Mods: {stagedMods.length}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelActions dir={'right'}>
          {Boolean(stagedMods.length) && (
            <React.Fragment>
              <Warning color={'secondary'} />
              <Typography color={'secondary'}>You have uncommitted changes</Typography>
            </React.Fragment>
          )}
          <Button color={'primary'} onClick={() => commitChanges()} variant={'contained'}>
            Commit Changes
          </Button>
        </ExpansionPanelActions>
        <ExpansionPanelDetails className={styles.modsWrapper}>
          <List>
            {sortedMods.map((mod, idx) => (
              <div>
                <ModCard key={idx} mod={mod} />
                <Divider variant={'inset'} />
              </div>
            ))}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Card>
  );
};

const mapStateToProps = (state: RootReduxState): StateProps =>
  ({
    mods: state.admin.mods,
    stagedMods: state.admin.stagedMods
  } as StateProps);

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ fetchMods } as any, dispatch);

export default connect<StateProps, DispatchProps, {}, RootReduxState>(
  mapStateToProps,
  mapDispatchToProps
)(Mods);
