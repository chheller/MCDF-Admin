import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { RootReduxState } from '../../../redux/reducers';
import { stageMod, unstageMod } from '../data/actions';
import { ModData } from '../types';

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

const styles = {
  media: {
    backgroundSize: 'contain',
    height: 140,
    width: '100%'
  } as const,
  card: {
    margin: 10,
    width: 320
  }
};

function ModCard({ mod, stageMod, unstageMod, stagedMods }: Props) {
  const [isStaged, setStaged] = useState(false);
  const descrLength = 80;
  const titleLength = 15;
  const readablePath = (modPath: string) => {
    const split = modPath.match(/[A-Z][a-z]+/gm);
    const parsed = !!split ? split.join(' ') : modPath;
    return parsed.slice(0, titleLength).replace('-', ' ');
  };

  const description = mod.description
    ? mod.description.length > descrLength
      ? mod.description.slice(0, descrLength) + '...'
      : mod.description
    : 'No description provided';
  const name = !!mod.name
    ? mod.name.length > titleLength
      ? mod.name.slice(0, titleLength) + '...'
      : mod.name
    : readablePath(mod.path) + '...';
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
    <Card style={styles.card}>
      <CardHeader
        title={name}
        subheader={mod.version || 'Unknown version'}
        action={
          <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button
              color={mod.enabled ? 'secondary' : 'primary'}
              variant={isStaged ? 'outlined' : 'contained'}
              onClick={toggleModStage}
            >
              {determineButtonEnabled() ? 'Enable' : 'Disable'}
            </Button>
          </CardActions>
        }
      />
      <CardMedia style={styles.media} image={path} />

      <CardContent>
        <Typography variant={'body1'} style={{ marginLeft: 5 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
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
