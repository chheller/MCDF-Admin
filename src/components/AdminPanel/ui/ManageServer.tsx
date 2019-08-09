import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootReduxState } from '../../../redux/reducers';
import { fetchMods, fetchServerStatus } from '../data/actions';
import { ModData, ServerStatus } from '../types';
import styles from './styles.module.css';
import { Cloud, CloudOff, CloudCircle, CloudDoneSharp, CloudQueue } from '@material-ui/icons';
import Mods from './Mods';

interface ReduxProps {
  serverStatus: ServerStatus;
}

interface DispatchProps {
  fetchServerStatus(): void;
}

type Props = ReduxProps & DispatchProps;

const ManageServer = ({ fetchServerStatus, serverStatus }: Props) => {
  useEffect(() => {
    fetchMods();
    fetchServerStatus();
    const interval = setInterval(() => fetchServerStatus(), 5000);
    return () => clearInterval(interval);
  }, []);

  const mapStatus = () => {
    switch (serverStatus) {
      case 'ONLINE':
        return <CloudDoneSharp fontSize={'large'} color={'primary'} />;
      case 'RESTARTING':
        return <CloudQueue fontSize={'large'} color={'secondary'} />;
      case 'UNKNOWN':
      case 'OFFLINE':
      default:
        return <CloudOff fontSize={'large'} color={'error'} />;
    }
  };
  return (
    <div>
      <Card className={styles.card}>
        <CardHeader title="Server Status" />
        <CardContent>
          <div className={styles.statusContainer}>
            <div className={styles.statusIcon}>{mapStatus()}</div>
            <Typography variant={'subheading'}>{`Minecraft server is ${serverStatus}`}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">
            Restart Server
          </Button>
        </CardActions>
      </Card>

      <Mods />
    </div>
  );
};

const mapStateToProps = (state: RootReduxState) => ({
  mods: state.admin.mods,
  serverStatus: state.admin.serverStatus
});

const bindDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchMods,
      fetchServerStatus
    },
    dispatch
  );

export default connect<ReduxProps, DispatchProps, {}, RootReduxState>(
  mapStateToProps,
  bindDispatch
)(ManageServer);
