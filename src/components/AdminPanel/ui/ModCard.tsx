import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction
} from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { RootReduxState } from '../../../redux/reducers';
import { stageMod, unstageMod } from '../data/actions';
import { ModData } from '../types';

import cssStyles from './styles.module.css';
import { Image } from '@material-ui/icons';
interface OwnProps {
  mod: ModData;
}

interface ReduxProps {
  stagedMods: ModData[];
}

interface DispatchProps {
  stageMod(mod: ModData): void;
  unstageMod(mod: ModData): void;
}
type Props = OwnProps & ReduxProps & DispatchProps;

function ModCard({ mod, stageMod, unstageMod, stagedMods }: Props) {
  const [isStaged, setStaged] = useState(false);

  const readablePath = (modPath: string) => {
    const split = modPath.match(/[A-Z][a-z]+/gm);
    const parsed = !!split ? split.join(' ') : modPath;
    return parsed.replace('-', ' ');
  };

  const description = mod.description ? mod.description : 'No description provided';
  const name = !!mod.name ? mod.name : readablePath(mod.path);
  const path =
    !!mod.logoFile && mod.logoFile !== ''
      ? `${process.env.PUBLIC_URL}/images/${mod.path.replace('jar', mod.logoFile.split('.')[1])}`
      : 'https://avatars0.githubusercontent.com/u/1390178?s=400&v=4';

  const toggleModStage = () => {
    if (!!stagedMods.find(stagedMod => stagedMod === mod)) {
      unstageMod(mod);
      setStaged(false);
    } else {
      stageMod(mod);
      setStaged(true);
    }
  };
  const determineButtonEnabled = () => {
    if (mod.enabled) {
      return isStaged ? true : false;
    } else {
      return isStaged ? false : true;
    }
  };
  return (
    <ListItem className={cssStyles.modContainer} alignItems={'flex-start'}>
      <ListItemAvatar>
        <img src={path} className={cssStyles.modImage} />
      </ListItemAvatar>
      <ListItemText
        className={cssStyles.modText}
        primary={
          <Typography variant={'subtitle2'} color={'textPrimary'} className={cssStyles.modTitle}>
            {name}
          </Typography>
        }
        secondary={
          <React.Fragment>
            <Typography color={'textSecondary'}>{mod.version || 'Unknown version'}</Typography>
            <Typography variant={'body1'} className={cssStyles.modDescription}>
              {description}
            </Typography>
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction className={cssStyles.modAction}>
        <Button
          color={mod.enabled ? 'secondary' : 'primary'}
          variant={isStaged ? 'outlined' : 'contained'}
          onClick={toggleModStage}
        >
          {determineButtonEnabled() ? 'Enable' : 'Disable'}
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

const mapStateToProps = (state: RootReduxState) => ({
  stagedMods: state.admin.stagedMods
});

const bindDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      stageMod,
      unstageMod
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  bindDispatchToProps
)(ModCard);
