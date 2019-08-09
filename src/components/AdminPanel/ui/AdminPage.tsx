import Mods from './Mods';
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Settings, CloudUpload, SwapHoriz } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import ManageServer from './ManageServer';

export const AdministrationPage = () => {
  const [manageServerOpen, setManageServerOpen] = React.useState(true);
  const [uploadModsOpen, setUploadModsOpen] = React.useState(false);

  const showPage = (page: 'Manage Server' | 'Upload Mods') => {
    switch (page) {
      case 'Upload Mods':
        setUploadModsOpen(true);
        setManageServerOpen(false);
        break;
      case 'Manage Server':
      default:
        setManageServerOpen(true);
        setUploadModsOpen(false);
        break;
    }
  };
  const drawerWidth = 200;
  const styles = {
    content: {
      flexGrow: 1,
      paddingLeft: 20,
      overflow: 'auto',
      maxHeight: '100vh'
    },
    root: {
      display: 'flex'
    },
    drawer: {
      width: drawerWidth
    }
  };
  const classes = makeStyles(styles)();

  const renderDrawerList = () =>
    [
      {
        text: 'Manage Server',
        icon: <Settings />
      } as const,
      {
        text: 'Upload Mods',
        icon: <CloudUpload />
      } as const
    ].map(({ text, icon }) => (
      <ListItem button key={text} onClick={() => showPage(text)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ));

  return (
    <div className={classes.root}>
      <Drawer variant="permanent" anchor="left" className={classes.drawer}>
        <List>{renderDrawerList()}</List>
      </Drawer>

      <main className={classes.content}>
        {manageServerOpen && <ManageServer />}
        {uploadModsOpen && <div>Coming Soon!</div>}
      </main>
    </div>
  );
};
