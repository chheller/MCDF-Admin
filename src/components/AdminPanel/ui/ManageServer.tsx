import React, { useEffect } from 'react';
import { RootReduxState } from '../../../redux/reducers';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Button, CardHeader, CardActions, Typography, CardContent } from '@material-ui/core';
import { ModData } from '../types';
import { fetchMods } from '../data/actions';
interface OwnProps {}
interface ReduxProps {
  mods: ModData[];
}

interface DispatchProps {
  fetchMods(): void;
}

type Props = OwnProps & ReduxProps & DispatchProps;

const ManageServer = ({ mods, fetchMods }: Props) => {
  useEffect(() => {
    fetchMods();
  }, []);
  return (
    <Card style={{ paddingLeft: 10, minHeight: '100vh' }}>
      <CardHeader title="Manage Server" />
      <CardContent>
        <Typography variant="body1">Server status: online</Typography>
        <Typography variant="body1">Active mods: {mods.length}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary">
          Restart Server
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state: RootReduxState) => ({
  mods: state.admin.mods
});

const bindDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchMods
    },
    dispatch
  );

export default connect<ReduxProps, DispatchProps, OwnProps, RootReduxState>(
  mapStateToProps,
  bindDispatch
)(ManageServer);
